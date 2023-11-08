import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Registration/Register";
import Services from "../Home/Services/Services";
import ServiceDetails from "../Home/ServiceDetails/ServiceDetails";
import Errorelement from "../Errorelement/Errorelement";
import BookedServices from "../DashBoard/MySchedules/BookedServices";
import AddServices from "../DashBoard/AddServices/AddServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
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
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/popularservices/${params.id}`)
      },
      {
        path:"/myschedules",
        element: <BookedServices></BookedServices>
      },
      {
        path: "/addservice",
        element: <AddServices></AddServices>
      }


    ]
  },
]);

export default router;