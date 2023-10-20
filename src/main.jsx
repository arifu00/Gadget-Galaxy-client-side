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
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import UpdateProduct from "./Pages/AddProduct/UpdateProduct";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./providers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://gadget-galaxy-server.vercel.app/brands"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/brands/:brandName",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://gadget-galaxy-server.vercel.app/brands/${params.brandName}`
          ),
      },
      {
        path: "/product/:id/",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gadget-galaxy-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/updateproduct/:id/",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gadget-galaxy-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://gadget-galaxy-server.vercel.app/addtocard"),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
