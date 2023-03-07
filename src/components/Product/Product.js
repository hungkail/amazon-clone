import React from 'react'
import "./Product.css";
import Productdata from './Productdata';


const Product = () => {
  console.log(Productdata);
  const productImage = Productdata.map((product) =>
  <div>
      <img src={product.image} alt="" />
  </div>
  )
  const productName = Productdata.map((name) =>
  <div>
      {name.name}
  </div>
  )
  const productPrice = Productdata.map((price) =>
  <div>
      {price.price}
  </div>
  )
  return (
    <div>
      <div className="product__container">
        <div className="product__category">
          <h3>Deals on frequently purchased items</h3>
          <div className="product__row">
            {productImage[0]}
            {productImage[1]}
          </div>
          <div className="product__row">
            {productImage[2]}
            {productImage[3]}
          </div>
        </div>
        <div className="product__category">
          <h3>Inspired by your purchase of "Breville Knock Box"</h3>
          <div className="product__row">
            {productImage[4]}
            {productImage[5]}
          </div>
          <div className="product__row">
            {productImage[6]}
            {productImage[7]}
          </div>
        </div>
        <div className="product__category">
          <h3>More to explore in Electronics</h3>
          <div className="product__row">
            {productImage[8]}
            {productImage[9]}
          </div>
          <div className="product__row">
            {productImage[10]}
            {productImage[11]}
          </div>
        </div>
        <div className="product__category">
          <div>
            <h3>More items to explore</h3>
            {productImage[12]}
            {productName[12]}
            <p className="p">{productPrice[12]}</p>
          </div>
        </div>
      </div>
      <div className="product__container2">
        <h3>Related to items you've viewed</h3>
        <div className="product__row2">
          {productImage[13]}
          {productImage[14]}
          {productImage[15]}
          {productImage[16]}
          {productImage[17]}
          {productImage[18]}
          {productImage[19]}
        </div>
      </div>
    </div>
  )
}

export default Product;
