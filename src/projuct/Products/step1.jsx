import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useInView } from "react-intersection-observer";

const ProductCard = ({ product, addToCart }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-4 flex flex-col gap-2">
        <img src={product.img} className="h-96 w-full object-cover" alt={product.name} />
        <h1 className="text-cyan-600 text-3xl font-semibold">{product.name}</h1>
        <h2 className="text-blue-800 text-3xl">${product.price}</h2>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const Step1 = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/auth/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="mt-6 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSeeMore}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
            See More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Step1;
