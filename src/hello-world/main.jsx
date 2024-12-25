import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import Todolist from "../components/todolist/Todolist.jsx";
import {
  AlertButton,
  MyButton,
  SaveToolbar,
  Toolbar,
} from "../components/button/Button.jsx";
import { SearchForm, Search } from "../components/form/SearchForm.jsx";
import { CounterApp } from "../components/form/CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Todolist />
      <AlertButton text="Click Me" message="Hello World!" />
      <MyButton text="Hit Me" onHit={() => alert("Hello World!")} />
      <Toolbar onClick={() => alert("You Click Div Toolbar!")} />
      <SaveToolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Button is Save!");
        }}
      />
      <SearchForm />
      <Search />
      <br />
      <CounterApp />
    </Container>
  </StrictMode>
);
