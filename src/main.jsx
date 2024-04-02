import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './providers/AuthProviders';
import Order from './components/Order';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>

    <RouterProvider router={router} />

    </AuthProviders>
  </React.StrictMode>,
)
