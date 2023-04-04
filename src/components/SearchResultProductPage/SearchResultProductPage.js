import React from 'react'
import "./SearchResultProductPage.css"
import Banner from "./Advertisement.png"
import SearchResultPagination from "../SearchResultPagination/SearchResultPagination"

function SearchResultProductPage() {
  return (
    <div className="SearchResultProductPage">
      <img src={Banner} alt="" />
      <span>Check each product page for other buying options.</span>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          1
        </div>
        <div className="SearchResultProduct">
          2
        </div>
        <div className="SearchResultProduct">
          3
        </div>
        <div className="SearchResultProduct">
          4
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          1
        </div>
        <div className="SearchResultProduct">
          2
        </div>
        <div className="SearchResultProduct">
          3
        </div>
        <div className="SearchResultProduct">
          4
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          1
        </div>
        <div className="SearchResultProduct">
          2
        </div>
        <div className="SearchResultProduct">
          3
        </div>
        <div className="SearchResultProduct">
          4
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          1
        </div>
        <div className="SearchResultProduct">
          2
        </div>
        <div className="SearchResultProduct">
          3
        </div>
        <div className="SearchResultProduct">
          4
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          1
        </div>
        <div className="SearchResultProduct">
          2
        </div>
        <div className="SearchResultProduct">
          3
        </div>
        <div className="SearchResultProduct">
          4
        </div>
      </div>
      <SearchResultPagination />
    </div>
  )
}

export default SearchResultProductPage;
