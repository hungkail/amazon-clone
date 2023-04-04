import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import SearchBar from "./components/Searchbar/Searchbar";
import ProductSection from "./components/ProductSection/ProductSection"
import FooterPart2 from "./components/FooterPart2/FooterPart2"
import ShoppingCartPage from "./components/ShoppingCartPage/ShoppingCartPage"
import Frequent_purchase_Carousel from "./components/FrequentPurchase/Frequent_purchase_carousel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar />
              <ProductSection />
              <Home />
              <Frequent_purchase_Carousel />
              <FooterPart2 />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <h1>This is login page</h1>
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <h1>Order</h1>
            </div>
          }
        />
        <Route
          path="/ProductPage"
          element={
            <div>
              <SearchBar />
              <ProductPage />
            </div>
          }
        />
        <Route
          path="/checkOut"
          element={
            <div>
              <SearchBar />
              <ShoppingCartPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
