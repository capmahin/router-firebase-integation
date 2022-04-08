import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Products.css";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h1>Knock Knock !! Who's There</h1>
      <h5>{user ? user.displayName : "Voot"}</h5>
    </div>
  );
};

export default Products;
