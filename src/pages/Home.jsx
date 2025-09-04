import React from "react";
import ProductCard from "./../Components/Cards/ProductCard";
import AllProducts from "../Components/Shop/AllProducts";

export default function Home() {
  return (
   <div className="text-pink-700"> 
      <h1 className="text-3xl font-bold text-pink-600 my-5"> Home Page </h1> 
      <AllProducts />
    </div>
  );
}
