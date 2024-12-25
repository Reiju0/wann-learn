import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import { Task } from "./Task.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Task />
    </Container>
  </StrictMode>
);
