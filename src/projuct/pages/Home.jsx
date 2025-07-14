import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Home.css"
const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://studiova-nuxt.netlify.app/images/background/projects-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Welcome to <span className="text-indigo-400">ShopVerse</span>
          </h1>
          <p className="text-md md:text-lg text-gray-200 mb-6">
            Discover premium products, best deals, and fast delivery – all in one place.
          </p>
          <Link to="/service">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
            >
              Start Shopping
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
