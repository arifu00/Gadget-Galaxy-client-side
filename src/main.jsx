import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AddProduct from "./Pages/AddProduct/AddProduct";
import MyCart from "./Pages/MyCart/MyCart";
import Register from "./Pages/Register/Register";
import AddBrand from "./Pages/AddProduct/AddBrand";
import Products from "./Components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/addbrand",
        element: <AddBrand></AddBrand>,
      },
      {
        path: '/brands/:brandName',
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brandName}`)
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
