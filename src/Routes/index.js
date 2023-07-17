import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Proposal from "../views/Proposals";
import Client from "../views/Clients";
import UpdateClient from "../views/Clients/UpdateClient";
import NewSection from "../views/Proposals/addSection";
import Preview from "../views/PreviewPage";
import ViewClient from "../views/Clients/viewClient";


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
            path: "clientdeaitls/:id",
            element: <ViewClient/>,
        },
        {
            path: "proposals",
            element: <Proposal/>,
        },
        {
            path: "proposal/:id",
            element:<NewSection/>,
        },

      ]
    },
    {
        path: "/preview/:id",
        element: <Preview/>,
      },
  ]);

export default router