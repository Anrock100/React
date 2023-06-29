import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Contacts from "./Pages/Contacts";
import Gallery from "./Pages/Gallery";
import Error from "./Pages/Error";

import { createBrowserRouter, RouterProvider, route } from "react-router-dom";
import RegisterPage from "./Register";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contacts />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
