import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home/Home";
import LogIn from "../LogIn/LogIn";


const router = createBrowserRouter ([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <LogIn></LogIn>
        }
      ]
    },
  ]);

  export default router;