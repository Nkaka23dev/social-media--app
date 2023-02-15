import { auth } from "../config/firebase" 
import {useAuthState} from "react-firebase-hooks/auth"
 
export default function Main() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      Main Routes
      <h1>{user?.displayName}</h1>
    </div>
  )
}
