import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './routers';
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from 'react-router-dom';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ClerkProvider publishableKey={clerkPubKey} >
    <RouterProvider router={router} />
  </ClerkProvider>



);



