import React from "react";
import { removeFromCart } from "../../rTX/Slices/CartSlice";
import { useDispatch } from "react-redux";

export default function CartCard({ product }) {
  let dispatch = useDispatch();

  return (
    <section className="flex flex-col gap-3 p-4 border-2 border-green-900 rounded-2xl shadow-2xl hover:shadow-lg transition-shadow duration-300  ">
      <img
        src={product.thumbnail}
        alt=""
        className="w-full h-48 rounded-lg bg-gray-50"
      />
      <h2 className="text-lg font-bold text-green-900 ">{product.title}</h2>
      <p className="text-sm text-gray-600 line-clamp-2">
        {product.description}
      </p>
      <section className="flex items-center justify-between">
        <p className="text-lg font-semibold text-green-700">
          price: <span className="text-red-700">{product.price}$</span>
        </p>
        <p className="text-lg font-semibold text-green-700">
          quantity: <span className="text-red-700">{product.quantity}</span>
        </p>
      </section>

      <button
        className="px-4 py-2 rounded-2xl bg-red-900 text-white hover:bg-red-700 transition-colors duration-300"
        onClick={() => {
          console.log(product);
          dispatch(removeFromCart(product));
        }}>
        Remove From Cart
      </button>
    </section>
  );
}
