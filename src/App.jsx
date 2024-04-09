import React, { Children } from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./components/Root/RootNavigation";
import Home from "./components/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootNavigation />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <>
  <RouterProvider router={router}/>
  </>;
};

export default App;
