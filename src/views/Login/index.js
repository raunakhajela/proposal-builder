import React from "react";
import {
  SignedIn,
  SignedOut,
  // UserButton,
  // useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Dashboard from "../Dashboard";
function Login() {
  return (
    <>
      <SignedIn>
        <Dashboard/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>


  );
}


export default Login;

