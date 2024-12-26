import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "./Container";
import { NoteApp, NoteAppContext, NoteAppReducer } from "./NoteApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <div
        style={{
          display: "flex",
          margin: "20px",
          gap: "100px",
          justifyContent: "between",
        }}>
        <NoteApp />
        <NoteAppReducer />
        <NoteAppContext />
      </div>
    </Container>
  </StrictMode>
);
