import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Proposal from "../views/Proposals";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/>,
      children:[
        {
            path: "clients",
            element: <p>Clients</p>,
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