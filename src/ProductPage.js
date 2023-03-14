import React from "react";
import "./ProductPage.css";
import ProductWidget from "./ProductWidget";

function ProductPage() {
  return (
    <div>
      <div className="container">
        <div className="pictureContainer">
          <h1>picture container</h1>
          <img
            className="productImg"
            src="https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_SL1500_.jpg"
          ></img>
        </div>
        <div className="">
          <h1>Description container</h1>
          <p>
            Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double
            Rich Chocolate, 5 Pound (Packaging May Vary)
          </p>

          <a href="url">Visit the Optimum Nutrition Store</a>
          <p>⭐⭐⭐⭐</p>
        </div>
        <div className="widgetContainer">
          <h1>Widget container</h1>
          <ProductWidget />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
