import React from "react";
import {
  SignedIn,
  SignedOut,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Dashboard from "../Dashboard";
function Login() {
  const {isLoaded,user} =useUser()
 if(isLoaded){
  localStorage.setItem("useridentity",user.id)
 }
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>


  );
}


export default Login;

