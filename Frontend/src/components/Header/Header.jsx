import { useState, useEffect } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FaRegMessage, FaRegFloppyDisk, FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import SearchField from "./SearchField";
import MainMenu from "./MainMenu";
import SlideInCart from "../SlideInCart/SlideInCart";

import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../Authentication/Auth";

const Header = () => {
  const { itemsInCart, calculateQuantity, slideInCart, setSlideInCart } =
    useCart();
  const context = useAuth();

  const TotalQuantity = calculateQuantity(itemsInCart);
  const Navigation = [
    {
      id: 1,
      menu: localStorage.getItem("user") || context.user != null ? localStorage.getItem("user") : "Login",
      icon: <FaRegUser />,
      url: localStorage.getItem("user") || context.user != null ? "/logout" : "/login",
    },
    {
      id: 2,
      menu: "My Store",
      icon: <FaRegFloppyDisk />,
      url: "/mystore",
    },
    {
      id: 3,
      menu: "Shop",
      icon: <FaCartShopping />,
      url: "/shop",
    },
    {
      id: 4,
      menu: "Support",
      icon: <FaRegMessage />,
      url: "/support",
    },
  ];

  const MobileNavigation = Navigation.filter((item) =>
    ["Wishlist"].includes(item.menu),
  );

  return (
    <>
      <header className="relative">
        <SlideInCart
          className={slideInCart ? "translate-x-0" : ""}
          setSlideInCart={setSlideInCart}
          slideInCart={slideInCart}
        />
        <div className="bg-blue-500 px-4 py-3 xl:py-4 2xl:px-16">
          <div className="container mx-auto">
            <div className="hidden flex-col items-center justify-between gap-6 md:flex lg:flex-row">
              <div className="flex w-full justify-between lg:w-auto lg:justify-normal mr-10">
                <NavLink to={'/'}>
                  <FaCartShopping size={30} />
                </NavLink>
              </div>
              <div className="flex w-full flex-grow items-center lg:w-auto">
                <div className="flex w-full items-center gap-10 pl-0 pr-0 lg:pl-6 lg:pr-6 ">
                  <SearchField />
                </div>
              </div>
              <div className="lg:pr-0 xl:pl-14 xl:pr-6 2xl:pr-4">
                <MainMenu
                  MenuArray={Navigation}
                  label={true}
                  slideInCart={slideInCart}
                  setSlideInCart={setSlideInCart}
                  itemsInCart={itemsInCart}
                  TotalQuantity={TotalQuantity}
                />
              </div>
            </div>
            {/* Mobile Header */}
            <div className="container mx-auto md:hidden">
              <div className="mb-5 flex justify-between">
                <div className="flex items-center">
                </div>
                <div className="flex items-center gap-3 ">
                  <a
                    href="/login"
                    className="flex h-7 w-16 items-center justify-center rounded-md border border-white text-xs uppercase text-white"
                  >
                    {localStorage.getItem("user") || context.user != null ? localStorage.getItem("user") : "Login"}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <SearchField />
                <div className="pl-4">
                  <MainMenu
                    MenuArray={MobileNavigation}
                    label={false}
                    slideInCart={slideInCart}
                    setSlideInCart={setSlideInCart}
                    TotalQuantity={TotalQuantity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
