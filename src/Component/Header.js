import React, { useState } from "react";
import toolslogo from "../images/toolslogo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./Cart";
import { CartProvider, useCart } from "react-use-cart";
import TOOLZYlogo1 from '../images/TOOLZYlogo1.png'
import product1 from "../images/product1.jpg";
import Mhome from "./Mhome";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handelShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 mt-0 md:px-4 z-50 bg-white">
      {/*desktop*/}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12" >
             <img src={TOOLZYlogo1} className="h-full"></img>
          </div>
        </Link>
        {/* <div className="flex items-start">
          <p className="h1" >TOOLZY</p>
        </div> */}
        <div className="flex item-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""} className="text-[#00df9a] no-underline">
              Home
            </Link>
            <Link to={"menu"} className="text-[#00df9a] no-underline">
              Menu
            </Link>
            <Link to={"about"} className="text-[#00df9a] no-underline">
              About
            </Link>
            <Link to={"contact"} className="text-[#00df9a] no-underline">
              Faq
            </Link>
          </nav>
          <div>
            <div className="text-slate-600 relative  cursor-pointer">
              <TiShoppingCart
                style={{ height: "35px", width: "35px" }}
                onClick={handleShow}
              />
              <div className="absolute top-0 right-0 text-white bg-red-500 h-4 w-4 rounded-full text-sm text-center">
                0
              </div>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                scroll={true}  
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>YOUR CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <CartProvider>
                  <Cart/>
                  </CartProvider>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
          <div
            className="text-4xl text-slate-600 cursor-pointer"
            onClick={handelShowMenu}
          >
            <div className="border-2 border-solid border-slate-600 p-1 rounded-full ">
              <FaUser />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-3 px-3 shadow drop-shadow-md text-sm flex flex-col">
                <Link
                  to={"newproduct"}
                  className="whitespace-norap cursor-pointer"
                >
                  NewProduct
                </Link>
                <Link to={"login"} className="whitespace-norap cursor-pointer">
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
