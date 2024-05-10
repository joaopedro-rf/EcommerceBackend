import React, { useState } from "react";
import useCoffeeBar from "../hooks/useCoffeeBar";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import CartModal from "./CartModal";
import { useAuth } from "../context/AuthContext";
import { useAddToCart } from "../hooks/useAddToCart";
//import { useCart } from "../context/CartContext";

export const CoffeeBar = () => {
  const { data, error } = useCoffeeBar();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user } = useAuth();
  const { mutate: mutateAddToCart } = useAddToCart();
  /* const { mutateCart } = useCart(); */
  const userId = user?.userID;

  const openModal = (product) => {
    setIsOpen(true);
    setSelectedProduct(product);
  };

  const addToCart = async (productId, userId, quantity) => {
    if (user) {
      try {
        await mutateAddToCart({ productId, userId, quantity });
        /* mutateCart(userId); */
      } catch (error) {
        console.error("Add to cart failed:", error);
      }
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full text-left ">
      <div className="grid grid-cols-1 gap-8 px-16 py-24 mobile:px-8 tablet:grid-cols-2 middle:grid-cols-3 middle:px-12 widder:grid-cols-4 ">
        {data?.content.map((product) => (
          <div key={product.productId} className=" py-4 ">
            <div className="flex">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mb-4 mr-64 max-h-72 min-h-60 w-auto object-contain mobile:h-72 mobile:w-full"
              />
            </div>

            <h2 className="mb-4 text-lg font-semibold text-white">
              {product.name}
            </h2>
            <div className="mb-4 ml-auto flex flex-row gap-4  text-white  ">
              <p className="cursor-pointer hover:text-gray-500">
                <BsCart
                  onClick={() => addToCart(product.productId, userId, 1)}
                  size={24}
                />
              </p>
              <p className="cursor-pointer hover:text-gray-500">
                <BsHeart size={24} />
              </p>
              <div className="hover:text-gray-500 ">
                <span>
                  <BsSearch onClick={() => openModal(product)} size={24} />
                </span>
                <CartModal
                  isOpen={isOpen}
                  onClose={closeModal}
                  data={selectedProduct}
                >
                  <h2 className="mb-4 text-xl font-bold">Modal Title</h2>
                  <p>This is the content of the modal.</p>
                </CartModal>
              </div>
            </div>
            <p className="text-lg font-bold text-lightbrown">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeBar;
