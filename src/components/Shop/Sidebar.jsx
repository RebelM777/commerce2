import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function Sidebar() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      let { data } = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(data);
    }
    getCategories();
  }, []);

  return (
    <aside className="flex flex-col gap-3 p-6 border-4 border-pink-300 shadow-2xl rounded-2xl bg-gradient-to-b from-pink-100 to-pink-200"> {/* Hot pink theme */}
      <NavLink
        to={"/shop"}
        end
        className={({ isActive }) =>
          `px-4 py-2 rounded-2xl font-medium text-center shadow text-white transition-all duration-200
          ${isActive ? "bg-gradient-to-r from-pink-600 to-pink-700 border-2 border-pink-400" : "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-2 border-pink-300"}`
        }>
        All Products
      </NavLink>

      {categories.map((category) => (
        <NavLink
          key={uuidv4()}
          to={`${category.slug}`}
          className={({ isActive }) =>
            `px-4 py-2 rounded-2xl font-medium text-center shadow text-white transition-all duration-200
            ${isActive ? "bg-gradient-to-r from-pink-600 to-pink-700 border-2 border-pink-400" : "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-2 border-pink-300"}`
          }>
          {category.name}
        </NavLink>
      ))}
    </aside>
  );
}