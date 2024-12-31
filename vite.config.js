import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        hello_world: "hello-world.html",
        contact: "contact.html",
        task: "task.html",
        note: "note.html",
        timer: "timer.html",
        guestbook: "guestbook.html",
        products: "products.html",
      },
    },
  },
});
