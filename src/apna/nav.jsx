import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserLarge, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Nav({ cartCount }) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="h-[5rem] w-[90%] bg-[#C0C9EE] ml-[3.3rem] mt-[1rem] rounded-[10px] flex">
        <a href="#" className="flex font-normal mt-[1.3rem] ml-[3rem] text-[1.3rem] scale-110 text-[#131D4F]">
          Apna<h1 className="font-black text-blue-400 scale-200">X</h1>Hai
        </a>

        <ul className="flex gap-[2rem] ml-[3rem] mt-[1.5rem]">
          <li onClick={() => navigate('/')} className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">Home</li>
          <li className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">About</li>
          <li className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">Contact</li>
          <li className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">Email</li>
        </ul>

        <div className="h-[2rem] w-[30%] bg-[#9EC6F3] rounded-[10px] mt-[1.4rem] ml-[2rem] flex">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-[1rem] mt-[0.5rem]" />
          <input
            type="text"
            className="ml-[1.4rem] h-[2rem] w-[90%] rounded-[10px] bg-[white] text-[blue]"
            placeholder="  Search Here..."
          />
        </div>

        <section className="font-normal">
          <FontAwesomeIcon
            icon={faUserLarge}
            className="text-[2rem] ml-[3rem] mt-[1rem] text-blue-900 cursor-pointer hover:text-[gold]"
          />
        </section>

        {/* Cart Icon Section */}
        <section className="relative">
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => navigate('/cart')}
            className="text-[2rem] ml-[3rem] mt-[1rem] text-blue-900 cursor-pointer hover:text-[gold]"
          />
          {cartCount > 0 && (
            <span className="absolute top-[0.5rem] left-[5rem] bg-red-500 text-white rounded-full px-2 text-sm">
              {cartCount}
            </span>
          )}
        </section>

        <section>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[2rem] ml-[3rem] mt-[1rem] text-blue-900 cursor-pointer hover:text-[gold]"
          />
        </section>
      </nav>

      <div className="h-[8rem] w-[90%] bg-[#FFC107] ml-[3.3rem] mt-[3rem] rounded-[10px] flex">
        <div className="grid h-[8rem ] w-[70%] ">
          <h1 className="text-[brown] text-2xl font-bold mt-[2.4rem] ml-[3rem] absolute">
            Own a Lengency with 10% off
          </h1>
          <p className="ml-[2rem] mt-[5rem] relative">
            Save on select watches from Rolex, OMEGA, and more. |{" "}
            <span>Ends 6/24. Max $700 off orders $500+. 2x use.</span>
          </p>
        </div>
        <button className="h-[2rem] w-[15%] bg-[brown] mt-[4rem] ml-[7rem] rounded-[10px] text-[#FFC107] font-bold">
          Get the coupen
        </button>
      </div>
    </>
  );
}

export default Nav;
