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
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { CheckoutProvider } from "./contexts/CheckoutContext.jsx";
import { Login } from "./components/Authentication/Login.jsx";
import { Register } from "./components/Authentication/Register.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DatabaseProvider>
    <CartProvider>
      <CheckoutProvider>
        <HeaderProvider>
          <RouterProvider router={routes} />
        </HeaderProvider>
      </CheckoutProvider>
    </CartProvider>
  </DatabaseProvider>
);
