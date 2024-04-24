import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ShopFilter from "../components/ShopFilter";
import ShopHero from "../components/ShopHero";
import { BsStar } from "react-icons/bs";


export default function Shop() {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 200,
  });

  return (
    <div className="bg-cover bg-center h-full bg-black ">
      <Navbar />
      
      <div className="flex flex-row w-full">
        <div className="hidden desktop:block pt-36 ">
          <ShopFilter title="Price">
            <form>
              <div className="flex gap-2 mb-4">
                <span className="text-white">From $</span>

                <input
                  type="number"
                  name="minPrice"
                  id="minPrice"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                  className="text-center shadow-sm w-14 border-2 border-gray-500"
                />
                <span className="text-white ">To $</span>
                <input
                  type="number"
                  name="maxPrice"
                  id="maxPrice"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                  className="shadow-sm w-14 border-2 border-gray-500"
                />
              </div>
            </form>
            <button className="text-black w-full py-1 bg-white hover:bg-gray-300 font-medium border-2 border-gray-500">
              Filter
            </button>
          </ShopFilter>

          <ShopFilter title="Rating">
            <div className="flex flex-row gap-2">
              <BsStar className="text-white"></BsStar>
              <BsStar className="text-white"></BsStar>
              <BsStar className="text-white"></BsStar>
              <BsStar className="text-white"></BsStar>
              <BsStar className="text-white"></BsStar>
            </div>
          </ShopFilter>
          <ShopFilter title="Available">
            <form className="space-y-4 items-center">
              <div className="">
                <input
                  type="radio"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="size-4 text-lightbrown border-gray-300"
                />
                <label
                  className="text-white font-medium hover:text-lightbrown"
                  htmlFor="vehicle1"
                >
                  {" "}
                  In stock
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                  className="size-4 text-lightbrown border-gray-300"
                />
                <label
                  className="text-white font-medium hover:text-lightbrown"
                  htmlFor="vehicle2"
                >
                  {" "}
                  Out of stock
                </label>
              </div>
            </form>
          </ShopFilter>
        </div>
        <div className="w-full ">
          <ShopHero />
        </div>
      </div>
    </div>
  );
}
