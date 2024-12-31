import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Products } from "./Products";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Products />
  </StrictMode>
);
