import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";


import style from "./navbar.module.css";

export default function Navbar() {
  let cartProducts = useSelector((state) => state.cart);

  let myPages = [
    { name: "Home", path: "" },
    { name: "Shop", path: "shop" },
    { name: "About", path: "about" },
  ];

  return (
    <header className="flex justify-between px-20 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg mb-8 border-b-4 border-pink-300"> 
      <section>
        <Link className="hover:text-pink-200 rounded-md px-3 py-2 font-medium text-xl font-bold transition-colors duration-200">
          🎀 molly's shop 🎀
        </Link>
      </section>
      <nav className="flex items-center gap-6">
        {myPages.map((page) => (
          <Link
            className="hover:text-pink-200 rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:bg-pink-600 px-4 py-2 rounded-xl"
            to={page.path}
            key={uuidv4()}>
            {page.name}
          </Link>
        ))}
      </nav>
      <section className="flex items-center">
        <Link
          className="hover:text-pink-200 rounded-md px-3 py-2 font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-pink-600 px-4 py-2 rounded-xl"
          to={"cart"}>
           Cart - {cartProducts.length}
        </Link>
      </section>
    </header>
  );
}