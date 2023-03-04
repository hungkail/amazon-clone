import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>This is Home Page</h1>
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
          path="/prime"
          element={
            <div>
              <h1>Prime</h1>
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
