import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase"

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/")
  }
  return (
    <section>
      <div className='max-w-6xl mx-auto grid w-full space-y-8'>
        <p className='text-sky-500 text-2xl  text-center font-semibold'>Sign In With Google To Continue</p>
        <button onClick={handleSignIn}
          className='p-3 mx-auto px-10 rounded-md hover:bg-blue-600 bg-blue-500 text-white font-semibold'>Sign In with Google</button>
      </div>
    </section>
  )
}
