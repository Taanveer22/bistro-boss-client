import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import webRouter from "./routes/webRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={webRouter} />
  </StrictMode>,
);
