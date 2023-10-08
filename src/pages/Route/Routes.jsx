
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home";
import AboutUs from "../About Us/AboutUs";
import Login from "../Login/Login";
import Register from "../Register/Register";


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
            }
        ]
    }
])


export default router;