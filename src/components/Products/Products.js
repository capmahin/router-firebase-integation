import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

import "./Products.css";

const auth = getAuth(app);
const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>Knock Knock !! Who's There</h1>
      <h5>{user ? user.displayName : "Voot"}</h5>
    </div>
  );
};

export default Products;
