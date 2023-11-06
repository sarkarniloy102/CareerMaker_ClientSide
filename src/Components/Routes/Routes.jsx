import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Registration/Register";
import Services from "../Home/Services/Services";




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
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        
       
      ]
    },
  ]);

  export default router;