import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./composants/NavBar.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import Contact from "./pages/Contact.jsx";
import Produits from "./pages/Produits.jsx";
import Notfound from "./pages/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CategoryCard from "./composants/CategoryCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
