import React from "react";
// import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Favoritos from "../Favoritos";
import Menu from "../Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
  },
	{
    path: "/like",
    element: <Favoritos/>,
  },
	{
    path: "*",
    element: "Es una prueba tecnica",
  }
]);

const AppRouters = () => {
  return (
		<RouterProvider router={router} />
  );
};

export default AppRouters;
