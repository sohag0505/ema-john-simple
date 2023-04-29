import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cheakout from "./components/Cheakout/Cheakout";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import AuthProvider from "./components/providers/AuthProvider";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import "./index.css";
import cartProductsLoder from "./loaders/cartProductLoderes";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoder,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: "cheakout",
        element: (
          <PrivateRoute>
            <Cheakout></Cheakout>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
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
