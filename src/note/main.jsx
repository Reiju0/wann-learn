import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "./Container";
import { NoteApp } from "./NoteApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <NoteApp />
    </Container>
  </StrictMode>
);
