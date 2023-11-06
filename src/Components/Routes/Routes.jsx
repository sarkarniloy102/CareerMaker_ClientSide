import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Registration/Register";


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
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;