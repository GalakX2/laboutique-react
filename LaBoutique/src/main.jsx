// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './composants/NavBar.jsx'
import ProductCard from './composants/ProductCard.jsx'
import SearchBar from './composants/SearchBar.jsx'
import Categories from './pages/Categories.jsx'
import Contact from './pages/Contact.jsx'
import Produits from './pages/Produits.jsx'
import Notfound from './pages/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<App />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
