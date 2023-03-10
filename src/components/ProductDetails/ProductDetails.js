import React from 'react'
import "./ProductDetails.css"
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

function ProductDetails() {
  return (
    <div>
      <div className="productDetails">
        <div className="productDetails__otherImages">
            <img src="https://m.media-amazon.com/images/I/51vt+41KjuS._AC_US40_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/412oIBQQqFS._AC_US40_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/51W1Wlv919S._AC_US40_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/41C2GMyUt2S._AC_US40_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/41RiO9iiBsS._AC_US40_.jpg" alt="" />
            <span className="productDetails__otherImagesText">5 VIDEOS</span>
        </div>
        <div className="productDetails__imgContainer">
            <img className="mainImage" src="https://m.media-amazon.com/images/I/71AdaOvTvIS._AC_SY879_.jpg" alt="" />
            <span className="productDetails__imgContainerText">Roll over image to zoom in</span>
        </div>
        <div className="enlargeImage">
            <OutboxOutlinedIcon />
        </div>
        <div className="productDetails__descriptionContainer">
            <h3>Optimum Nutrition Gold Standard 100% Whey Protein Powder, Extreme Milk Chocolate, 5 Pound (Packaging May Vary)</h3>
            <span>Visit the Optimum Nutrition Store</span>
            <span>⭐⭐⭐⭐⭐▼ 9,549 ratings | 143 answered questions</span>
            <p>Price: $80.54 ($1.01 / Ounce)</p>
            <span><CheckCircleIcon />Save $8.29 at checkout Terms ▼</span>
            <span>Coupon: <input type="checkbox" /> Save an extra 25% on your first Subscribe and Save Order.   Terms ▼</span>
            <span>Get 5% back ($4.02 in rewards) on the amout charged to your Amazon Prime Rewards Visa Signature Card.</span>
            <span>May be available at a lower price from other sellers, potentially without free Prime Shipping.</span>
            <span>To use SNAP EBT, select one-time purchase</span>
            <div className="productDetails2">
                <div className="productDetails__itemInformation">
                    <p>Brand</p>
                    <p>Flavor</p>
                    <p>Diet Type</p>
                    <p>Protein Source</p>
                    <p>Unit Count</p>
                </div>
                <div className="productDetails__itemInformation2">
                    <p>Optimum Nutrition</p>
                    <p>Extreme Milk Chocolate</p>
                    <p>Vegetarian</p>
                    <p>Whey</p>
                    <p>80.0 Ounce</p>
                </div>
            </div>
            <h4>About this item</h4>
            <ul>
                <li>Packaging may vary - new look with the same trusted quality</li>
                <li>Gold Standard 100% Whey - 24g of protein per serving to help build and maintain muscle when taken ove time with regular resistance training</li>
                <li>5.5g of naturally ocurring branched chain amino acids (BCAA and 11g of naturally occuring essential amino acids (EAAs) per serving to support muscle recovery</li>
                <li>Anytime formula - great before or after exercise, between meals, with a meal, or any time of day when you need extra protein</li>
                <li>THe world's best-selling whey protein powder</li>
                <li>Banned substance tested and the highest quality control measures so you feel comfortable and confident consuming the product</li>
            </ul>
            <span><CommentOutlinedIcon /> Report incorrect product information.</span>
            <h3>Consider a similar item</h3>
            <div className="productDetails">
                <div>
                    <img className="considerASimilarItem" src="https://m.media-amazon.com/images/I/71xqnuQ5JNL._AC_SY300_SX300_.jpg" alt="" />
                </div>
                <div>
                    <span>Garden of Life Sport Whey Portein Powder Vanilla, Premium Grass Fed Whey Protein Isolate Plus Probiotics for Immune System Health, 24g Protein, Non GMO, Gluten Free, Cold Processed - 20 Servings</span>
                    <span>1.41 Pound (Pack of 1)</span>
                    <span>⭐⭐⭐⭐⭐ (3752)</span>
                    <span>$41.44 ($1.84/Ounce)</span>
                    <span>Climate Pledge Friendly</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
