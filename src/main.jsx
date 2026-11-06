import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import publicRoutes from "./routes/publicRoutes";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={publicRoutes} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
);
