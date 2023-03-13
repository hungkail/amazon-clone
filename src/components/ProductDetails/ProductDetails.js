import React from 'react'
import "./ProductDetails.css"
import IosShareIcon from '@mui/icons-material/IosShare';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Productdata from '../Product/Productdata';
import Coupon from "./Coupon.png"


function ProductDetails() {
    const productImage = Productdata.map((product) =>
    <div className="mainImage grayText">
        <img className="mainImage pointer" src={product.image} alt="" />
        <span className="mainImage__click2">Roll over image to zoom in</span>
        <span className="mainImage__click">Click image to open expanded view</span>
    </div>
    )
    const productPrice = Productdata.map((price) =>
    <div>
        {price.price}
    </div>
    )
    const productBrand = Productdata.map((brand) =>
    <div>
        {brand.brand}
    </div>
    )
    const productFlavor = Productdata.map((flavor) =>
    <div>
        {flavor.flavor}
    </div>
    )
    const productDietType = Productdata.map((dietType) =>
    <div>
        {dietType.dietType}
    </div>
    )
    const productProteinSource = Productdata.map((proteinSource) =>
    <div>
        {proteinSource.proteinSource}
    </div>
    )
    const productUnitCount = Productdata.map((unitCount) =>
    <div>
        {unitCount.unitCount}
    </div>
    )
  return (
    <div>
      <div className="productDetails">
        <div className="productDetails__otherImages">
            <img className="enlargeImage pointer" src="https://m.media-amazon.com/images/I/51vt+41KjuS._AC_US40_.jpg" alt="" />
            <img className="enlargeImage pointer" src="https://m.media-amazon.com/images/I/412oIBQQqFS._AC_US40_.jpg" alt="" />
            <img className="enlargeImage pointer" src="https://m.media-amazon.com/images/I/51W1Wlv919S._AC_US40_.jpg" alt="" />
            <img className="enlargeImage pointer" src="https://m.media-amazon.com/images/I/41C2GMyUt2S._AC_US40_.jpg" alt="" />
            <img className="enlargeImage pointer" src="https://m.media-amazon.com/images/I/41RiO9iiBsS._AC_US40_.jpg" alt="" />
            <span className="productDetails__otherImagesText">5 VIDEOS</span>
        </div>
        <div className="productDetails__imgContainer">
            {productImage[20]}
        </div>
        <div className="enlargeImage2">
            <IosShareIcon className="IosShareIcon pointer"/>
        </div>
        <div className="productDetails__descriptionContainer">
            <h3>Optimum Nutrition Gold Standard 100% Whey Protein Powder, Extreme Milk Chocolate, 5 Pound (Packaging May Vary)</h3>
            <span className="blueText pointer hover underline">Visit the Optimum Nutrition Store</span>
            <span><span className="pointer">⭐⭐⭐⭐⭐</span><KeyboardArrowDownIcon className="grayText pointer" /><span className="blueText pointer hover underline">9,549 ratings</span> | <span className="blueText pointer hover underline">143 answered questions</span></span>
            <p className="grayText overflow">Price: <span className="redText largeFont overflow">{productPrice[20]}</span><span className="redText overflow"> ($1.01 / Ounce) </span></p>
            <span className="greenText2 bold"><CheckCircleIcon className="greenText" /> Save $8.29 at checkout <span className="blueText pointer hover">Terms</span><KeyboardArrowDownIcon className="grayText pointer"/></span>
            <span className="greenText"><img className="coupon" src={Coupon} alt="" /><input type="checkbox" />Save an extra 25% on your first Subscribe and Save Order.<span className="blueText pointer hover">  Terms</span><KeyboardArrowDownIcon className="grayText pointer"/></span>
            <span><span className="blueText bold">Get 5% back ($4.02 in rewards)</span> on the amount charged to your Amazon Prime Rewards Visa Signature Card.</span>
            <span>May be available at a lower price from <span className="blueText pointer hover underline">other sellers</span>, potentially without free Prime Shipping.</span>
            <span>To use SNAP EBT, select <span className="bold">one-time purchase</span></span>
            <div className="productDetails2">
                <div className="productDetails__itemInformation">
                    <p>Brand</p>
                    <p>Flavor</p>
                    <p>Diet Type</p>
                    <p>Protein Source</p>
                    <p>Unit Count</p>
                </div>
                <div className="productDetails__itemInformation2">
                    <p>{productBrand}</p>
                    <p>{productFlavor}</p>
                    <p>{productDietType}</p>
                    <p>{productProteinSource}</p>
                    <p>{productUnitCount}</p>
                </div>
            </div>
            <h4>About this item</h4>
            <ul>
                <li>Packaging may vary - new look with the same trusted quality</li>
                <li>Gold Standard 100% Whey - 24g of protein per serving to help build and maintain muscle when taken ove time with regular resistance training</li>
                <li>5.5g of naturally ocurring branched chain amino acids (BCAA and 11g of naturally occuring essential amino acids (EAAs) per serving to support muscle recovery</li>
                <li>Anytime formula - great before or after exercise, between meals, with a meal, or any time of day when you need extra protein</li>
                <li>The world's best-selling whey protein powder</li>
                <li>Banned substance tested and the highest quality control measures so you feel comfortable and confident consuming the product</li>
            </ul>
            <span><CommentOutlinedIcon className="grayText" /> <span className="blueText pointer hover underline">Report incorrect product information.</span></span>
            <h3>Consider a similar item</h3>
            <div className="productDetails">
                <div>
                    <img className="considerASimilarItem pointer" src="https://m.media-amazon.com/images/I/71xqnuQ5JNL._AC_SY300_SX300_.jpg" alt="" />
                </div>
                <div>
                    <span className="blueText pointer hover underline">Garden of Life Sport Whey Portein Powder Vanilla, Premium Grass Fed Whey Protein Isolate Plus Probiotics for Immune System Health, 24g Protein, Non GMO, Gluten Free, Cold Processed - 20 Servings</span>
                    <br/><span>1.41 Pound (Pack of 1)</span>
                    <br/><span>⭐⭐⭐⭐⭐<span className="blueText pointer hover underline">(3752)</span></span>
                    <br/><span className="redText">$41.44 ($1.84/Ounce)</span>
                    <span className="greenText">Climate Pledge Friendly</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
