import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import publicRoutes from "./routes/publicRoutes";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Create an instance of QueryClient
const queryClient = new QueryClient();

// rendering context order
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={publicRoutes} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
