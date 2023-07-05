import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Proposal from "../views/Proposals";
import Client from "../views/Clients";
import UpdateClient from "../views/Clients/UpdateClient";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/>,
      children:[
        {
            path: "clients",
            element: <Client/>,
          },
        {
            path: "client/:id",
            element: <UpdateClient/>,
        },
        {
            path: "proposals",
            element: <Proposal/>,
        },

      ]
    },
    {
        path: "/contacts",
        element: <p>contacts</p>,
      },
  ]);

export default router