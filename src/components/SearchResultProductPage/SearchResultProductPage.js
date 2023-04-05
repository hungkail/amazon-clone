import React from 'react'
import "./SearchResultProductPage.css"
import Banner from "./Advertisement.png"
import BannerBottom from "./AdvertisementBottom.png"
import BrandsRelatedToYourSearch from "./BrandsRelatedToYourSearch.png"
import SearchResultPagination from "../SearchResultPagination/SearchResultPagination"
import Product from "./ProductData"

function SearchResultProductPage() {
  return (
    <div className="SearchResultProductPage">
      <img src={Banner} alt="" />
      <span>Check each product page for other buying options.</span>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
        <Product
            image="https://m.media-amazon.com/images/I/515u6XKIwSL._AC_SX679_.jpg"
            name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate 2 Pound (Packaging May Vary)
            "
            price={40.70}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61JjBjBOQ0L._AC_SX679_.jpg"
            name="Body Fortress Super Advanced Whey Protein Powder, Chocolate, Immune Support (1), Vitamins C & D Plus Zinc, 1.78 lbs
            "
            price={22.98}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61oSBmP423L._AC_SX679_.jpg"
            name="Dymatize ISO100 Hydrolyzed Protein Powder, 100% Whey Isolate , 25g of Protein, 5.5g BCAAs, Gluten Free, Fast Absorbing, Easy Digesting, Gourmet Vanilla, 20 Servings
            "
            price={32.99}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/71QovSNZbLL._AC_SX679_.jpg"
            name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, French Vanilla Creme, 5 Pound (Packaging May Vary)
            "
            price={80.74}
          />
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/81wI8uQBJSL._SX522_.jpg"
            name="Orgain Organic Vegan Protein Powder, Creamy Chocolate Fudge - 21g of Plant Based Protein, Low Net Carbs, Non Dairy, Gluten Free, No Sugar Added, Soy Free, Kosher, Non-GMO, 2.03 Lb (Packaging May Vary)
            "
            price={26.99}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/613xbgkshyL._AC_SX679_.jpg"
            name="Garden of Life Organic Vegan Sport Protein Powder, Chocolate, Probiotics, BCAAs, 30g Plant Protein for Premium Post Workout Recovery, NSF Certified, Keto, Gluten Free, Made Without Dairy, 19 Servings
            "
            price={40.94}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/81OOLm+udaL._SX522_.jpg"
            name="Orgain Organic Vegan Protein Powder, Peanut Butter - 21g of Plant Based Protein, Low Net Carbs, Non Dairy, Gluten/ Lactose Free, No Sugar Added, Soy Free, Kosher, Non-GMO, 2.03 Pound
            "
            price={31.99}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61-6TMzRoRL._AC_SX679_.jpg"
            name="Isopure Creamy Vanilla Whey Isolate Protein Powder with Vitamin C & Zinc for Immune Support, 25g Protein, Zero Carb & Keto Friendly, 3 Pounds (Packaging May Vary)
            "
            price={69.83}
          />
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/81wI8uQBJSL._SX522_.jpg"
            name="Orgain Organic Vegan Protein Powder, Creamy Chocolate Fudge - 21g of Plant Based Protein, Low Net Carbs, Non Dairy, Gluten Free, No Sugar Added, Soy Free, Kosher, Non-GMO, 2.03 Lb (Packaging May Vary)
            "
            price={26.99}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/81Qm2a0j-VL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            name="Orgain Organic Protein + Superfoods Powder, Creamy Chocolate Fudge - 21g of Protein, Vegan, Plant Based, 6g of Fiber, No Dairy, Gluten, Soy or Added Sugar, Non-GMO, 2.02 Lb
            "
            price={29.99}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/81CaYzQ2EYL._SX522_.jpg"
            name="Orgain Vegan Protein Powder, Chocolate Coconut - 21g of Plant Based, Low Net Carbs, Non Dairy, Gluten, Lactose Free, No Sugar Added, Soy Free, Kosher, Non-GMO, 2.03 Pound
            "
            price={29.74}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61xc57g+ZlL._AC_SX679_.jpg"
            name="Garden of Life Vegan Protein Powder - Raw Organic Meal Replacement Shakes - Vanilla - Pea Protein, Greens and Probiotics for Women and Men, 14 Servings, 1.07 Pound (Pack of 1)
            "
            price={25.56}
          />
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61ljr4qaz4L._AC_SX679_.jpg"
            name="Vega Protein Made Simple, Vanilla, 39 Servings XL Tub - Plant Based Healthly Vegan Protein Powder with no Stevia, Dairy Free, Gluten Free, Vegetarian, 2.2 Pounds
            "
            price={31.72}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61kRvTMi4HL._AC_SX679_.jpg"
            name="Quest Nutrition Multi-purpose Protein Powder, 25.6 Ounce (Pack of 1)
            "
            price={32.68}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61JjBjBOQ0L._AC_SX679_.jpg"
            name="Body Fortress Super Advanced Whey Protein Powder, Chocolate, Immune Support (1), Vitamins C & D Plus Zinc, 1.78 lbs
            "
            price={22.98}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61R4+17mDCL._AC_SX679_.jpg"
            name="Ancient Nutrition Protein Powder Made from Real Bone Broth, Unflavored, 20g Protein Per Serving, 20 Serving Tub, Gluten Free Hydrolyzed Collagen Peptides Supplement
            "
            price={45.01}
          />
        </div>
      </div>
      <div className="SearchResultProductContainer">
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/61gDhLSSTvL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            name="Body Fortress Super Advanced Whey Protein Powder, Vanilla, Immune Support (1), Vitamins C & D Plus Zinc, 1.74 lbs
            "
            price={22.98}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/81sbJq8SNRL._AC_SX679_.jpg"
            name="Premier Protein Powder, Vanilla Milkshake, 30g Protein, 1g Sugar, 100% Whey Protein, Keto Friendly, No Soy Ingredients, Gluten Free, 17 servings, 23.3 ounces
            "
            price={25.18}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/711iWvBSAHL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            name="GHOST WHEY Protein Powder, Oreo - 2lb, 25g of Protein - Whey Protein Blend -Post Workout Fitness & Nutrition Shakes, Smoothies, Baking & Cooking - Cookie Pieces Inside
            "
            price={44.99}
          />
        </div>
        <div className="SearchResultProduct">
          <Product
            image="https://m.media-amazon.com/images/I/712Sf1t-ceL._AC_SX679_.jpg"
            name="Dymatize ISO100 Hydrolyzed Protein Powder, 100% Whey Isolate Protein, 25g of Protein, 5.5g BCAAs, Gluten Free, Fast Absorbing, Easy Digesting, Fruity Pebbles, 20 Servings
            "
            price={33.43}
          />
        </div>
      </div>
      <SearchResultPagination />
      <span>BRANDS RELATED TO YOUR SEARCH</span>
      <img src={BrandsRelatedToYourSearch} alt="" />
      <h3>Need Help?</h3>
      <span>Visit the help section or contact us</span>
      <img className="BannerBottom" src={BannerBottom} alt="" />
    </div>
  )
}

export default SearchResultProductPage;
