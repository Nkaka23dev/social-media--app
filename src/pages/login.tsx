import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";

export default function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
   const result = await signInWithPopup(auth, provider);
   navigate("/");
   console.log(result)
  }
  return (
    <div className="App">
     <p>You need to Login to continue</p>
     <button onClick={signInWithGoogle} style={{
      cursor: "pointer"
     }}>Login with google</button>
    </div>
  )
}
