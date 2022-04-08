import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1>Login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={() => signInWithGoogle()}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="your email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
