import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Avatar from 'react-avatar';

export default function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth)
  const logUserOut = () => {
    signOut(auth);
    navigate('/')
  }
  return (
    <section className='shadow-xl'>
      <div className='max-w-6xl mx-auto py-4 flex justify-between  items-center'>
        <div className='uppercase text-2xl font-bold'>
          LOGO
        </div>
        <div className='flex gap-10 text-xl items-center font-semibold'>
          {!user ? <NavLink to="/login" className='hover:underline'>Login</NavLink> : <NavLink to="/create" className='hover:underline'>Create Posts</NavLink>}
          <NavLink to="/" className='hover:underline'>Home</NavLink>

          <div className='flex items-center gap-6'>
            {user && (
              <>
                <p className='text-blue-500 text-[1.2rem] font-semibold'>{user?.displayName}</p>
                <button onClick={logUserOut} className='bg-red-500 hover:bg-red-600 text-white p-1 rounded-sm'>Logout</button>
                {user.photoURL ? <img className='rounded-full h-[3rem] w-[3rem]' src={user.photoURL} alt="" /> : <Avatar className='rounded-full h-[3rem] w-[3rem]' name="Foo Bar" />}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
