import React from "react";
import About from "./routes/about";
import Portfolio from "./routes/portfolio";
import Schedule from "./routes/schedule";
import Art from "./routes/art";
import { createBrowserRouter } from "react-router";
import App from "./App";
import { path } from "framer-motion/client";

// Different routes for the app, import the locations from the routes folder and give each its own path and element.
// The errorElement is used to display an error message if the route fails to load.
export const routes = [
    {
        path: "/",
        errorElement: <div/>,
        element: <About />,

    },
    {
        path: "/About",
        errorElement: <div/>,
        element: <About />,
    },
    {
        path: "/Portfolio",
        errorElement: <div/>,
        element: <Portfolio />,
    },
    {
        path: "/Schedule",
        errorElement: <div/>,
        element: <Schedule />,
    },
    {
        path: "/Art",
        errorElement: <div/>,
        element: <Art />,
    },

];

export const router = createBrowserRouter(routes);