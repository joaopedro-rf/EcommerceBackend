import "./index.css";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";


const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);

root.render(
  <AuthProvider>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CartProvider>
  </AuthProvider>
);
