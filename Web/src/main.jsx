import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./routes/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registro from "./routes/Registro";
import PaginaInicial from "./routes/PaginaInicial";
import ProtectedRoute from "./routes/ProtectRoute";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/registro" element={<Registro/>} />
      <Route 
          path="/paginainicial" 
          element={
            <ProtectedRoute>
              <PaginaInicial />
            </ProtectedRoute>
          } 
        />
    </Routes>
  </BrowserRouter>
);
