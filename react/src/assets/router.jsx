import {createBrowserRouter, Routes} from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/SignUp.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";

const router=createBrowserRouter({routes:[
    {
        path: '/login',
        element:<Login />
    },
    {
        path: '/Signup',
        element:<Signup />
    },
    {
        path: '/Users',
        element:<Users />
    },
    {
        path: '*',
        element:<NotFound />
    },
    
]})

export default router;