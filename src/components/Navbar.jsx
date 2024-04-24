import { BsCart, BsHeart, BsSearch, BsCaretDownFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import React, { useState, useCallback, useEffect } from "react";
import MenuAccount from "./MenuAccount";
import { FaRegCircleUser } from "react-icons/fa6";
import NavbarItem from "./NavbarItem";
import CartDrawer from "./CartDrawer";

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openAccountMenu, setOpenAccountMenu] = useState(false);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [Background, setBackground] = useState(false);
  const navigate = useNavigate();
  
  const TOP_OFFSET = 66;
  
  
  const handleClick = () => {
    navigate("/Auth");
  };

  useEffect(() => {
    const handleScroll = () => {
      {
        window.scrollY > TOP_OFFSET
          ? setBackground(true)
          : setBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMobileMenu = useCallback(() => {
    setOpenMobileMenu((prevOpenMenu) => !prevOpenMenu);
  }, []);

  const handleOpenAccountMenu = useCallback(() => {
    setOpenAccountMenu((prevOpenMenu) => !prevOpenMenu);
  }, []);

  const handleOpenCartDrawer = useCallback(() => {
    setOpenCartDrawer((prevOpenCart) => !prevOpenCart);
  }, []);

  return (
    <nav className="w-full fixed z-40 text-white text-sm opacity-90">
      <div
        className={`
            tablet:px-12
            flex
            flex-row
            items-center
            transition
            duration-500
            h-24
            min-h-24
            max-h-24
            w-full
            gap-12
            px-8
            border-b
            border-gray-500
            ${Background ? "bg-zinc-900 " : "bg-zinc-900"}
            `}
      >
        <img className="h-6 tablet:h-12 desktop:h-16" src="../logo.png" alt="" />
        <div
          onClick={handleOpenMobileMenu}
          className="desktop:hidden flex flex-row items-center gap-3 ml-6 relative cursor-pointer"
        >
          <p className="text-white text-sm">Browse</p>
          <BsCaretDownFill
            className={`text-white transition ${
              openMobileMenu ? "rotate-180" : "rotate-0"
            } `}
          />
          <MenuMobile visible={openMobileMenu} />
        </div>
        <div
          onClick={handleOpenAccountMenu}
          className="desktop:hidden flex flex-row items-center gap-2 cursor-pointer relative ml-auto"
        >
          <div className="ml-2">
            <FaRegCircleUser size={24} />
          </div>

          <BsCaretDownFill
            className={`text-white transition ${
              openAccountMenu ? "rotate-180" : "rotate-0"
            } `}
          />

          <MenuAccount visible={openAccountMenu} />
        </div>
        <div
          className="flex-row
            gap-12
            hidden
            desktop:flex
            w-full
            items-center"
        >
          <div className="relative text-black">
            <input
              type="text"
              placeholder="Search"
              className="w-[10rem] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <button className="absolute inset-y-0 right-0 px-3 py-2 rounded-r-lg hover:text-gray-500 transition">
              <BsSearch size={18} />
            </button>
          </div>

          <ul
            className="
            gap-12
            items-center
            flex-row
            hidden
            desktop:flex
            "
          >
            <li>
              <NavbarItem label="Home" />
            </li>

            <li>
              <NavbarItem label="Shop" />
            </li>
            <li>
              <BsHeart
                size={24}
                className="cursor-pointer hover:text-gray-500 transition"
              />
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition relative">
              <BsCart
                onClick={handleOpenCartDrawer}  
                size={24}
                className="cursor-pointer hover:text-gray-500 transition"
              />
              <CartDrawer visible={openCartDrawer} />
            </li>
          </ul>
          <div className="ml-auto">
            <p>Welcome</p>
            <a
              onClick={handleClick}
              className="col py-2 text-white rounded-lg hover:text-gray-500 transition cursor-pointer"
            >
              Login or create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
