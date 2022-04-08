import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { SignInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>Login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={SignInWithGoogle}>Google Sign In</button>
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
