import React from 'react'
import "./Searchbar.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
  return (
    <div className="searchBar">
       {/* Logo */}
       <img className="searchBar__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
       {/* Deliver to */}
       <div className="searchBar__Nav">
        <div className="searchBar__option">
            <span className="searchBar__optionLine1">Deliver to Hung</span>
            <span className="searchBar__optionLine2"><LocationOnOutlinedIcon className="searchBar__locationIcon" />Eastvale 92880</span>
         </div>
       </div>
       {/* Search Box */}
      <div className="searchBar__search">
        <input type="text" className="searchBar__searchInput" />
        <SearchIcon className="searchBar__searchIcon" />
      </div>
      {/* Links */}
      <div className="searchBar__Nav">
        {/* Language Change */}
        <div className="searchBar__option">
            <span className="searchBar__optionLine1"></span>
            <span className="searchBar__optionLine2"><img className="searchBar__languageFlag" src="https://em-content.zobj.net/thumbs/240/twitter/322/flag-united-states_1f1fa-1f1f8.png" alt=""/>EN ▼</span>
        </div>
        {/* 1st Link */}
        <div className="searchBar__option">
            <span className="searchBar__optionLine1">Hello, Brian</span>
            <span className="searchBar__optionLine2">Account & Lists ▼</span>
        </div>
        {/* 2nd Link */}
        <div className="searchBar__option">
            <span className="searchBar__optionLine1">Returns</span>
            <span className="searchBar__optionLine2">& Orders</span>
        </div>
        {/* Shopping Cart */}
        <div className="searchBar__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="searchBar__optionLine2 searchBar__shoppingCartIcon">Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
