import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "User/:id",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
