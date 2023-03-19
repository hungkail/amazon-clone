import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import SearchBar from "./components/Searchbar/Searchbar";
import FooterPart2 from "./components/FooterPart2/FooterPart2";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="homeContainer">
              <SearchBar />
              {/* <NavBar /> */}
              <Home className="home" />
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
              <h1>Check Out Page</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
