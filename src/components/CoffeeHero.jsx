import { BsCart } from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CoffeeHero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Shop");
  };
  return (
    <div className="relative pt-24">
      <img
        className="w-full h-[70vh] object-cover  opacity-20"
        src="../banner.jpeg"
        alt=""
      />
      <div className="absolute text-white inset-0 top-[40%] ml-24 ">
        <h1 className="text-6xl font-bold">COFFEE MARKET</h1>
        <p className="mt-2 ">
          Here you will find the best and freshest beans and all the utensils
          needed
        </p>
        <button
          className="border-2 bg-mid 
                rounded-3xl px-6 py-2 mt-5 border-white 
                hover:text-light inline-flex items-center"
          onClick={handleClick}
        >
          SHOP NOW <BsCart className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeHero;
