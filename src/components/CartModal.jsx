import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartModal = ({ isOpen, onClose, data }) => {
  const { cart, updateCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const decreaseCartQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseCartQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleClose = () =>{
    onClose();
    setQuantity(0);
  }
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="mx-4 mt-4 flex h-screen items-end justify-center text-center mobile:block mobile:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span
          className="hidden mobile:inline-block mobile:h-screen mobile:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all mobile:my-8 mobile:max-w-[90%] mobile:align-middle tablet:max-w-lg ">
          <div className="px-4 pt-5  mobile:p-6">
            <p className="text-lg font-semibold text-black">{data.name}</p>
            <img
              src={data.imageUrl}
              alt={data.name}
              className="left-0 mb-4 h-44 w-full object-contain tablet:h-72"
            />

            <p className="mb-4 text-sm  text-black">{data.description}</p>
            <div className="flex flex-row items-center">
              <p className="text-2xl font-bold text-lightbrown">
                ${data.price}
              </p>
              <div className="ml-auto flex flex-row">
                <button
                  type="button"
                  onClick={() => decreaseCartQuantity()}
                  disabled={quantity <= 0}
                  className="h-10 w-10 rounded-md
                border 
                border-transparent  bg-red-600  text-2xl
                text-white shadow-sm 
                hover:bg-red-700 
                "
                >
                  -
                </button>
                <p className="px-2 py-2 text-xl text-black">{quantity} </p>
                <button
                  type="button"
                  onClick={() => increaseCartQuantity()}
                  className="h-10 w-10 rounded-md
                border 
                border-transparent  bg-blue-600  text-2xl
                text-white shadow-sm 
                hover:bg-blue-700 "
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 mobile:flex mobile:flex-row-reverse mobile:px-6">
            <button
              type="button"
              className="rounded-md border border-transparent 
              bg-red-600 px-4 py-2 font-medium text-white 
              shadow-sm hover:bg-red-700 focus:outline-none 
             
              mobile:ml-3 mobile:w-auto mobile:text-sm"
              onClick={handleClose}
            >
              Close
            </button>

            <button
              type="button"
              className="rounded-md border border-transparent 
              bg-green-600 px-4 py-2 font-medium text-white 
              shadow-sm hover:bg-green-700 focus:outline-none 
             
              mobile:ml-3 mobile:w-auto mobile:text-sm"
              
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
