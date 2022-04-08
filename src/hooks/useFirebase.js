import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const SignInWithGoogle = () => {
    console.log("sign in Google");
  };
  return [user, setUser];
};

export default useFirebase;
