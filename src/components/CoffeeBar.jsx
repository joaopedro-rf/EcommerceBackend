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
    <div className="text-left w-full ">
      <div className="grid grid-cols-1 tablet:grid-cols-2 middle:grid-cols-3 widder:grid-cols-4 gap-8 mobile:px-8 middle:px-12 px-16 py-24 ">
        {data?.content.map((product) => (
          <div key={product.productId} className=" py-4 ">
            <div className="flex">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-auto min-h-60 max-h-72 object-contain mobile:w-full mobile:h-72 mr-64 mb-4"
              />
            </div>

            <h2 className="text-lg text-white font-semibold mb-4">
              {product.name}
            </h2>
            <div className="text-white flex-row flex ml-auto gap-4  mb-4  ">
              <p className="hover:text-gray-500 cursor-pointer">
                <BsCart
                  onClick={() => addToCart(product.productId, userId, 1)}
                  size={24}
                />
              </p>
              <p className="hover:text-gray-500 cursor-pointer">
                <BsHeart size={24} />
              </p>
              <p className="hover:text-gray-500 cursor-pointer">
                <BsSearch onClick={() => openModal(product)} size={24} />
                <CartModal
                  isOpen={isOpen}
                  onClose={closeModal}
                  data={selectedProduct}
                >
                  <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                  <p>This is the content of the modal.</p>
                </CartModal>
              </p>
            </div>
            <p className="text-lg text-lightbrown font-bold">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeBar;
