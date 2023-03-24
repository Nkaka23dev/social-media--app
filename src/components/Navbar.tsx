import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <section className='shadow-xl'>
      <div className='max-w-6xl mx-auto py-4 flex justify-between  items-center'>
        <div className='uppercase text-2xl font-bold'>
          LOgo
        </div>
        <div className='flex gap-10 text-xl font-semibold'>
          <NavLink to="/login" className='hover:underline'>Login</NavLink>
          <NavLink to="/" className='hover:underline'>Home</NavLink>
        </div>
      </div>
    </section>
  )
}
