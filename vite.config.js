import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/proj-form-AEDL/", // Nome do repositório no GitHub
});
