import React, { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { data, increaseCartQuantity, decreaseCartQuantity, cart } = useCart();
  const productList = cart?.productList;
  console.log(cart)
  
  

  const Product = ({ product }) => (
    <div className="mb-4 grid min-h-full min-w-full grid-cols-5 grid-rows-1 place-items-center gap-4 border pb-4 pt-4 ">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="mx-8 size-32 object-contain"
      />
      <p className="items-center text-xl font-semibold text-white">
        {product.name}
      </p>
      <div className="flex flex-row gap-4 border">
        <button
          className=" border-r px-2 py-2 text-white"
          onClick={() => decreaseCartQuantity(product.productId)}
          disabled={product.quantity === 1}
        >
          -
        </button>
        <p className=" py-2 text-xl font-semibold text-white">
          {product.quantity}
        </p>
        <button
          className=" border-l px-2 py-2 text-white"
          onClick={() => increaseCartQuantity(product.productId)}
        >
          +
        </button>
      </div>
      <p className="text-xl font-semibold text-white"> ${product.price}</p>

      <p className="text-xl font-semibold text-white">
        ${product.price * product.quantity}
      </p>
    </div>
  );

  return (
    <div className="h-full bg-black bg-cover bg-center ">
      <Navbar />

      <div className="flex w-full flex-row">
        <div className="w-full pt-36">
          <div className="mx-8 flex flex-col">
            <div className="mb-4 grid min-h-full min-w-full grid-cols-5 items-center gap-4 border pb-4 pt-4 text-center">
              <p className="mx-8 text-white"></p>

              <p className="mx-8 text-xl font-bold text-white">Product: </p>

              <p className="mx-8 text-xl font-bold text-white">Quantity: </p>

              <p className="mx-8 text-xl font-bold text-white">Price: </p>
              <p className="mx-8 text-xl font-bold text-white">
                Product total:
              </p>
            </div>
            {cart?.map((product) => (
              <Product key={product.productId} product={product} />
            ))}
          </div>
          <p className="mb-16 text-center text-2xl font-bold text-white">
            TOTAL PRICE: ${data?.price}
          </p>
          <div className="mx-16 mb-32 flex text-white">
            <a
              className="cursor-pointer bg-brown px-4 py-2 hover:opacity-90"
              href="/Shop"
            >
              CONTINUE SHOPPING
            </a>
            <div className="ml-auto flex gap-16">
              <button className="cursor-pointer bg-green-600 px-4 py-2 hover:bg-green-700">
                UPDATE CART
              </button>
              <a
                className="cursor-pointer bg-red-600 px-4 py-2 hover:bg-red-700"
                href=""
              >
                CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
