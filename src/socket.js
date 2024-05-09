import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Socket() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const newSocket = io("localhost:8080/socket.io", {});

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("WebSocket connected");
    });

    newSocket.on(
      "message",
      (message) => {
        console.log("Received message:", message);
        setMessages((prevMessages) => [...prevMessages, message]);
      },
      [],
    );

    newSocket.on("error", (error) => {
      console.error("WebSocket error:", error);
    });

    newSocket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });

    return () => {
      newSocket.close();
    };
  }, []);
}
