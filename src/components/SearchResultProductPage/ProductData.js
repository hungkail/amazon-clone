import React from 'react'
import "./SearchResultProductPage.css"

function ProductData(props) {
  return (
    <div>
      <img className="image" src={props.image} alt="" />
      <h3>{props.name}</h3>
      <h3>${props.price}</h3>
    </div>
  )
}

export default ProductData;
