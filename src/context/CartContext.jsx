import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
} from "react";
import { useAuth } from "./AuthContext";
import useSWR from "swr";
import Stomp from "stompjs";
import SockJS from "sockjs-client/dist/sockjs";
import { useAddToCart } from "../hooks/useAddToCart";

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
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const { mutate: mutateAddToCart } = useAddToCart();
  const userId = user ? user.userID : null;

  const { data, error, isLoading, mutate } = useSWR(
    user ? `https://api.joaopedrodev.com/api/carts/findByUser/${user.userID}` : null,
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

  const addToCart = async ({productId,quantity}) => {
    console.log("Add to cart:", productId, quantity, userId)
    if (user) {
      try {
        await mutateAddToCart({ productId, userId, quantity });
        
      } catch (error) {
        console.error("Add to cart failed:", error);
      }
    }
  };

  const updateCart = (productId, quantity) => {
    const existingProduct = cart.find(
      (product) => product.productId === productId,
    );
    if (existingProduct) {
      const newQuantity = Math.max(1, existingProduct.quantity + quantity);
      setCart(
        cart.map((product) =>
          product.productId === productId
            ? { ...product, quantity: newQuantity }
            : product,
        ),
      );
    }
   
  };

  useEffect(() => {
    const socket = new SockJS("https://api.joaopedrodev.com/ws");
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe("/topic/cart", (message) => {
        const receivedMessage = message.body;
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        mutate();
      });
    });

    setStompClient(client);

    return () => {
      client.disconnect();
    };
  }, [messages, mutate]);

  useEffect(() => {
    if (stompClient) {
      const intervalId = setInterval(() => {
        if (!stompClient.connected) {
          console.log(
            "WebSocket connection closed. Attempting to reconnect...",
          );
          stompClient.connect({}, () => {
            console.log("WebSocket reconnected.");
          });
        }
      }, 5000); 

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [stompClient]);

  return (
    <CartContext.Provider
      value={{
        data,
        mutateCart: mutate,
        updateCart,
        addToCart,
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
