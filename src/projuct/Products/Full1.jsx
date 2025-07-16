import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // ← useNavigate added
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCart } from "../context/CartContext";

const fetchProduct = async (id) => {
  const res = await axios.get(`http://localhost:7000/api/auth/product/${id}`);
  return res.data;
};

function Full1() {
  const { id } = useParams();
  const navigate = useNavigate(); // ← for navigation
  const { addToCart } = useCart();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-600 text-xl">
        Loading product details...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold text-xl">
        {error?.response?.data?.message || "Product not found or failed to load."}
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl">

      {/* ❌ Close Button (top right) */}
      <button
        onClick={() => navigate("/")} // ← go back to products
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
      >
        ×
      </button>

      <img
        src={product.img}
        alt={product.name || "Product Image"}
        className="w-full h-[500px] object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold text-cyan-700">{product.name}</h1>
      <p className="text-2xl text-blue-800 mt-2">${product.price}</p>
      <p className="mt-4 text-gray-700 text-lg">
        {product.description || "No description available."}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Full1;
