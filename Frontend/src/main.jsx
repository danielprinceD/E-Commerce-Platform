import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Homepage from "./pages/Homepage.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import Confirmation from "./pages/Confirmation.jsx";

import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";

import { CartProvider } from "./contexts/CartContext.jsx";
import { CheckoutProvider } from "./contexts/CheckoutContext.jsx";
import { Login } from "./components/Authentication/Login.jsx";
import { Register } from "./components/Authentication/Register.jsx";
import MyStore from "./pages/MyStore.jsx";
import { Support } from "./pages/Support.jsx";
import { Auth } from "./components/Authentication/Auth.jsx";
import { Logout } from "./components/Authentication/Logout.jsx";
import { AddProduct } from "./pages/AddProduct.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/shop",
    element: <Products />,
  },
  {
    path: "/shop/:id",
    element: <SingleProduct />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/mystore",
    element: <MyStore />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth>
    <DatabaseProvider>
      <CartProvider>
        <CheckoutProvider>
          <RouterProvider router={routes} />
        </CheckoutProvider>
      </CartProvider>
    </DatabaseProvider>
  </Auth>
);
