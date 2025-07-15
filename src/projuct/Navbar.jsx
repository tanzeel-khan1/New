import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ShoppingCart, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import './pages/Home.css'

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  
  const { cartItems, removeFromCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const handleLogout = () => {
    logout();
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="m-0 p-0 box-border">
        <nav className="h-24 w-full flex items-center justify-between px-6 md:px-10 bg-white shadow-md relative z-50">
          <NavLink to="/" className="font-bold text-indigo-600 text-4xl">
        <img  className='babar' src='https://studiova-nuxt.netlify.app/images/svgs/astrisk-icon.svg'/>

                    ShopVerse
          </NavLink>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6 text-indigo-600" />}
            </button>
          </div>

          <ul className={`
            flex-col md:flex-row md:flex gap-6 items-center absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 
            ${menuOpen ? "flex" : "hidden"}
          `}>
            {["Home", "About", "Contact", "Service"].map((text) => (
              <li key={text}>
                <NavLink
                  to={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                  className="text-base font-medium hover:text-indigo-600"
                  onClick={() => setMenuOpen(false)}>
                  {text}
                </NavLink>
              </li>
            ))}

            <li className="relative cursor-pointer" onClick={() => setShowCart(true)}>
              <ShoppingCart className="w-6 h-6 text-indigo-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/signup" className="text-blue-600 hover:text-blue-800" onClick={() => setMenuOpen(false)}>
                    SignUp
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="text-blue-600 hover:text-blue-800" onClick={() => setMenuOpen(false)}>
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-50 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setShowCart(false)} className="text-red-600 hover:underline">Close</button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex gap-4 border-b pb-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-gray-100 rounded" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                      <p className="text-indigo-600 font-bold text-sm">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-600 hover:underline">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
