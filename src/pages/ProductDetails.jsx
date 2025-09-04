import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  return (
    <section className="flex flex-col gap-3 p-4 border-2 border-green-900 rounded-2xl shadow-2xl hover:shadow-lg transition-shadow duration-300  ">
      <img src={product.thumbnail} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </section>
  );
}
