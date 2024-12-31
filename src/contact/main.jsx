import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import { Contact, ImmerContact } from "./Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Contact />
      <br />
      <ImmerContact />
    </Container>
  </StrictMode>
);
