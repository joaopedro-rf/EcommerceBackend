import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
} from "react";
import { useAuth } from "./AuthContext";

import useSWR from "swr";

const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const { data, error, isLoading, mutate } = useSWR(
    user ? `http://localhost:8080/api/carts/findByUser/${user.userID}` : null,
    fetcher,
    {
      onError: (err) => {
        console.error("SWR error:", err);
      },
      onSuccess: (data) => {
        setCart(data.productList);
      },
      revalidateOnFocus: false,
      shouldRetryOnError: false,

    },
  );
  

  const increaseCartQuantity = useCallback((productId) => {
    setCart((prevCart) => {
      const product = prevCart.find(
        (product) => product.productId === productId,
      );
      if (product) {
        const newProduct = { ...product, quantity: product.quantity + 1 };
        console.log(newProduct)
        return [
          ...prevCart.filter((product) => product.productId !== productId),
          newProduct,
        ];
      }
      console.log(prevCart)
      return prevCart;
    });
  }, []);

  const decreaseCartQuantity = useCallback((productId) => {
    setCart((prevCart) => {
      const product = prevCart.find(
        (product) => product.productId === productId,
      );
      if (product && product.quantity > 1) {
        const newProduct = { ...product, quantity: product.quantity - 1 };
        return [
          ...prevCart.filter((product) => product.productId !== productId),
          newProduct,
        ];
      }
      return prevCart;
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        data,
        mutateCart: mutate,
        decreaseCartQuantity,
        increaseCartQuantity,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = ({ cart }) => {
  return {
    cart,
  };
};

export const useCart = () => useContext(CartContext);
