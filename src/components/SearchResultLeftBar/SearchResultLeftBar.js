import React from 'react'
import "./SearchResultLeftBar.css"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SearchResultLeftBar() {
  return (
    <div className="SearchResultLeftBar">
      <p>Eligible for Free Shipping</p>
      <span><input type="checkbox" /> Free Shipping by Amazon</span>
      <span>All customers get FREE Shipping on orders over $25 shipped by Amazon</span>

      <p>Delivery Day</p>
      <span><input type="checkbox" /> Get It Today</span>
      <span><input type="checkbox" /> Get It by Tomorrow</span>

      <p>Amazon Local Stores</p>
      <span><input type="checkbox" /> Amazon Fresh</span>
      <span><input type="checkbox" /> Bristol Farms</span>
      <span><input type="checkbox" /> Whole Foods Market</span>

      <p>More-sustainable Products</p>
      <span><input type="checkbox" /> Climate Pledge Friendly</span>

      <p>Department</p>
      <span>Sports Nutrition Whey Protein Powders</span>
      <span>Sports Nutrition Protein Powder Blends</span>
      <span>Sports Nutrition Plant Protein Powders</span>
      <span>Sports Nutrition Pea Protein Powders</span>
      <span>Protein Drinks</span>
      <span>Powdered Drink Mixes & Flavorings</span>
      <span>Sports Nutrition Weight Gainers</span>
      <span>Vitamins, Minerals & Supplements</span>

      <p>Customer Reviews</p>
      <span><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      <span><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      <span><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      <span><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      
      <p>Brands</p>
      <span><input type="checkbox" /> Optimum Nutrition</span>
      <span><input type="checkbox" /> Dymatize</span>
      <span><input type="checkbox" /> Orgain</span>
      <span><input type="checkbox" /> Body Fortress</span>
      <span><input type="checkbox" /> Muscle Milk</span>
      <span><input type="checkbox" /> Premier Protein</span>
      <span><input type="checkbox" /> Isopure</span>
      <span><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p>Price</p>
      <span>Under $25</span>
      <span>$25 to $50</span>
      <span>$100 to $200</span>
      <span>$200 & Above</span>
      <input className="input" placeholder="$ Min" /><input className="input" placeholder="$ Max" /><button className="button">Go</button>

      <p>Deals & Discounts</p>
      <span>All Discounts</span>
      <span>Today's Deals</span>

      <p>Protein Grams Per Serving</p>
      <span><input type="checkbox" /> Up to 10 g</span>
      <span><input type="checkbox" /> 10-19 g</span>
      <span><input type="checkbox" /> 20-29 g</span>
      <span><input type="checkbox" /> 30-39 g</span>
      <span><input type="checkbox" /> 40-49 g</span>
      <span><input type="checkbox" /> 50 g & above</span>

      <p>Protein Supplement Powder Diet Type</p>
      <span><input type="checkbox" /> Gluten Free</span>
      <span><input type="checkbox" /> Halal</span>
      <span><input type="checkbox" /> Keto</span>
      <span><input type="checkbox" /> Kosher</span>
      <span><input type="checkbox" /> Paleo</span>
      <span><input type="checkbox" /> Plant Based</span>
      <span><input type="checkbox" /> Vegan</span>
      <span><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p>Protein Supplement Powder Material Type Free</p>
      <span><input type="checkbox" /> Dairy Free</span>
      <span><input type="checkbox" /> Fat Free</span>
      <span><input type="checkbox" /> Grain Free</span>
      <span><input type="checkbox" /> Lactose Free</span>
      <span><input type="checkbox" /> No Artificial Colors</span>
      <span><input type="checkbox" /> No Artificial Sweeteners</span>
      <span><input type="checkbox" /> Soy Free</span>
      <span><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p>Protein Supplement Powder Age Range</p>
      <span><input type="checkbox" /> Adult</span>

      <p>Protein Supplement Powder Package Type</p>
      <span><input type="checkbox" /> Bottle</span>
      <span><input type="checkbox" /> Box</span>
      <span><input type="checkbox" /> Canister</span>
      <span><input type="checkbox" /> Jar</span>
      <span><input type="checkbox" /> Pouch</span>
      <span><input type="checkbox" /> Tub</span>

      <p>Health & Personal Care Format</p>
      <span><input type="checkbox" /> Capsule</span>
      <span><input type="checkbox" /> Creams</span>
      <span><input type="checkbox" /> Gel</span>
      <span><input type="checkbox" /> Liquids</span>
      <span><input type="checkbox" /> Powders</span>
      <span><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p>Protein Supplement Powder Number of Items</p>
      <span><input type="checkbox" /> 1</span>
      <span><input type="checkbox" /> 2</span>
      <span><input type="checkbox" /> 3 & above</span>

      <p>Protein Supplement Powder Recommended Uses for Product</p>
      <span><input type="checkbox" /> Intra-Workout</span>
      <span><input type="checkbox" /> Post-Workout</span>
      <span><input type="checkbox" /> Pre-Workout</span>

      <p>Protein Supplement Powder Flavor</p>
      <span><input type="checkbox" /> Almond</span>
      <span><input type="checkbox" /> Banana</span>
      <span><input type="checkbox" /> Birthday Cake</span>
      <span><input type="checkbox" /> Blueberry</span>
      <span><input type="checkbox" /> Caramel</span>
      <span><input type="checkbox" /> Cherry</span>
      <span><input type="checkbox" /> Chocolate</span>
      <span><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p>Protein Supplement Powder Product Benefits</p>
      <span><input type="checkbox" /> Muscle Growth</span>
      <span><input type="checkbox" /> Weight Loss</span>

      <p>Subscription Options</p>
      <span><input type="checkbox" /> Subscribe & Save Eligible</span>

      <p>Packaging Option</p>
      <span><input type="checkbox" /> Fustration-Free Packaging</span>

      <p>International Shipping</p>
      <span><input type="checkbox" /> International Shipping Eligible</span>

      <p>Availability</p>
      <span><input type="checkbox" /> Include Out of Stock</span>
    </div>
  )
}

export default SearchResultLeftBar;
