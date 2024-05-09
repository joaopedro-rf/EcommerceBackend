import React, { useState , useEffect } from "react";
import { useCart } from "../context/CartContext";

const Drawer = ({ visible }) => {
  const { cart ,data } = useCart();
 
  if (!visible) return null;

  if (!cart) {
    return <div className="w-72 h-96 absolute top-8 left-0 flex-col border border-zinc-800 flex bg-black cursor-default">
      <div className="flex flex-col gap-4 px-3 overflow-auto">
        <p className="text-white text-center font-semibold text-lg">No products in the cart</p>
      </div>
    </div>;
  }
  console.log(cart);
  return (
    <div className="w-72  h-96 absolute top-8 left-0 flex-col border border-zinc-800 flex bg-black cursor-default">
      <div className="flex flex-col gap-4 px-3 overflow-auto">
        {cart?.map((product) => (
          <div
            key={product.productId}
            className="w-full h-22 flex flex-row items-end border-b pb-4 mb-4 pt-4"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="size-16 object-contain mx-2 "
            />
            <div className="flex flex-col text-left">
              <p className="text-white font-semibold text-md">Name: {product.name}</p>
              <p className="text-white font-semibold text-md">Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
        <p className="text-white text-center font-semibold text-lg">TOTAL PRICE: ${(data.price).toFixed(2)}</p>
        <a className="block w-full bg-red-600 hover:bg-red-700 text-center py-3 mb-5 font-semibold" href="/Cart">VIEW CART</a>
      </div>
    </div>
  );
};

export default Drawer;