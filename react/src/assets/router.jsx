import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from ".././views/login.jsx";
import Signup from ".././views/SignUp.jsx";
import Users from ".././views/Users.jsx";
import NotFound from ".././views/NotFound.jsx";
import DefaultLayout from ".././components/DefaultLayout.jsx";
import GuestLayout from ".././components/GuestLayout.jsx";
import { children } from "react";
import Dashboard from ".././views/Dashboard.jsx";

// Define the routes array directly
const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path:'/',
        element:<Navigate to= "/users" />
      },
      {
        path: '/Dashboard',
        element: <Dashboard />
      },
      {
        path: '/users',
        element: <Users />
      },
    ]

  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },

    ]

  },

  {
    path: '*',
    element: <NotFound />
  },
];

// Create the router with the routes array
const router = createBrowserRouter(routes);

export default router;
