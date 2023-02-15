import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <b>Home</b>
        </Link>
        {!user && <Link to="login">
          <b>Login</b>
        </Link>}
      </div>

      <div className="user">
        {user && (
          <>
            <h4>{user?.displayName}</h4>
            <img src={user?.photoURL || ""} width="40" height="40" alt="" />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
}
