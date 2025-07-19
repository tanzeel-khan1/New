import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCart } from "../context/CartContext";
import ReactImageMagnify from "react-image-magnify";

const fetchProduct = async (id) => {


  
  const res = await axios.get(`http://localhost:7000/api/auth/product/${id}`);
  return res.data;
};

function Full1() {
  const { id } = useParams();

  const navigate = useNavigate();


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
    return <div className="p-6 text-center text-gray-600 text-xl">Loading product details...</div>;
  }
  if (isError) {


    return (
      <div className="p-6 text-center text-red-600 font-semibold text-xl">
        {error?.response?.data?.message || "Product not found or failed to load."}
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl">



      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold">
        ×
      </button>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.name,
                isFluidWidth: true,
                src: product.img,
              },
              largeImage: {
                src: product.img,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: '200%',
                height: '100%',
              },
            }}
          />
        </div>

        <div className="flex-1">
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
      </div>
    </div>
  );
}

export default Full1;
