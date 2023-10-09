
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home";
import AboutUs from "../About Us/AboutUs";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AuthGuard from "../../AuthGuard";
import ServiceDetails from "../Services/ServiceDetails"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/servicedetails',
                element: <AuthGuard><ServiceDetails></ServiceDetails></AuthGuard>
            }
        ]
    }
])


export default router;