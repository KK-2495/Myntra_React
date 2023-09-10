import React from 'react';
import "../Components/AllCss/singlePro.css";

const singleProduct = () => {
  return (
    <>
        <div className="main">
            <div className="floater1">
                <i className="fa-regular fa-bell"></i>
            </div>
            <div className="navBar">
                <div className="navBar0">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="Myntra logo" />
                </div>
                <div className="navBar1">
                    <a href="/menTshirt.html">
                        <li>MEN</li>
                    </a>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                    <li>STUDIO <sup>NEW</sup></li>
                </div>
                <div className="navBar2">
                    <i className="fa-solid fa-magnifying-glass">
                        <input type="text" value="" placeholder="Search for products,brands and more" />
                    </i>

                </div>
                <div className="navBar3">
                    <div className="navBarLast">
                        <i className="fa-regular fa-user"></i>
                        <p>Profile</p>
                    </div>
                    <div className="navBarLast">
                        <i className="fa-regular fa-heart"></i>
                        <p>Wishlist</p>
                    </div>
                    <div onclick="redirect()" className="navBarLast">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <p>Bag</p>
                    </div>
                </div>
            </div>
            <div className="product">
                <div>
                    <p>Home/Clothing/Men Clothing/Tshirts/ <strong> Minions By Kook N Keech Tshirts-More By Minions By
                            Kook N Keech</strong></p>
                </div>
                <div className="productDetail">
                    <div className="productImage" id="productImage">
                         <div>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/736b9f2c-3a49-41a9-828c-1e0218b62e431559550212164-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-1.jpg"
                                alt='' />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/a21db48e-5fa4-4bd6-8a52-203745f247611559550212145-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-2.jpg"
                                alt='' />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/7d2bb3b5-b6a9-4cac-ab1f-814071ac32f11559550212123-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-3.jpg"
                                alt='' />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/c8e2c851-ad44-4623-9df0-b03995554c431559550212101-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-4.jpg"
                                alt='' />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/361af51e-4174-419c-aebc-3bb80120d8f31559550212090-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-5.jpg"
                                alt='' />
                        </div> 
                    </div>
                    <div className="productInfo">
                        <div>
                            <div id="productName">
                                <h3>Minions by Kook N Keech
                                </h3>
                                <p>Men Purple Boxy Fit Printed Round Neck Pure Cotton T-shirt
                                </p>
                            </div>
                            <div>
                                <b>4.2</b>
                                <i className="fa-solid fa-star"></i>
                                <p>2.8k Ratings</p>
                            </div>
                        </div>
                        <div>
                            <div id="productPrice">
                                <h3>₹659</h3>
                                <p>MRP <s>₹1099</s> </p>
                                <h2>(40% OFF)</h2>
                            </div>
                            <div>
                                <p>inclusive of all taxes</p>
                            </div>
                            <div>
                                <p>SELECT SIZE</p>
                                <p>SIZE CHART</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div>
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                                <p>XXL</p>
                            </div>
                            <div>
                                <div>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <p id="addToBag">ADD TO BAG</p>
                                </div>
                                <div>
                                    <i className="fa-regular fa-heart"></i>
                                    <p>WISHLIST</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>DELIVERY OPTIONS</h3><i className="fa-solid fa-truck"></i>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter Pincode" maxlength="6" />
                                <p>Check</p>
                            </div>
                            <div>
                                Please enter PIN code to check delivery time & Pay on Delivery Availability
                            </div>
                            <div>
                                <p>
                                    100% Original Products
                                </p>
                                <p>Pay on delivery might be available
                                </p>
                                <p>Easy 14 days returns and exchanges
                                </p>
                                <p>Try & Buy might be available
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>BEST OFFERS</h3>
                                <i className="fa-solid fa-tag"></i>
                            </div>
                            <div>
                                <p>Best Price:</p>
                                <p>Rs.512</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Applicable on: Orders above Rs. 899 (only on first purchase)
                                    </li>
                                    <li>Coupon code: <strong>MYNTRA200</strong>
                                    </li>
                                    <li>Coupon Discount: Rs. 147 off (check cart for final savings)
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>View Eligible Products</p>
                            </div>
                            <div>
                                <div>
                                    <h3>10% Instant Discount on RuPay Credit Cards
                                    </h3>
                                    <ul>
                                        <li>Min Spend Rs 2,000, Max Discount Rs 500.
                                        </li>
                                    </ul>
                                    <p>Terms & Condition</p>
                                </div>
                                <div>
                                    <h3>EMI option available
                                    </h3>
                                    <ul>
                                        <li>EMI starting from Rs.31/month
                                        </li>
                                    </ul>
                                    <p>View Plan</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>PRODUCT DETAILS</h4>
                                <i className="fa-regular fa-rectangle-list"></i>
                            </div>
                            <div>Purple printed T-shirt, has a round neck, short sleeves
                            </div>
                            <div>
                                <div>
                                    <h5>Size & Fit</h5>
                                    <p>Boxy Fit</p>
                                    <p>The model (height 6') is wearing a size M</p>
                                </div>
                                <div>
                                    <h5>Material & Care
                                    </h5>
                                    <p>100% Cotton
                                    </p>
                                    <p>Machine-wash</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Specifications</h4>
                                </div>
                                <div>
                                    <div>
                                        <small>Character</small>
                                        <p>Minions</p>
                                    </div>
                                    <div>
                                        <small>Fabric</small>
                                        <p>Pure Cotton</p>
                                    </div>
                                    <div>
                                        <small>Fit</small>
                                        <p>Boxy</p>
                                    </div>
                                    <div>
                                        <small>Length</small>
                                        <p>Regular</p>
                                    </div>
                                    <div>
                                        <small>Main Trend</small>
                                        <p>Graphic Print Others</p>
                                    </div>
                                    <div>
                                        <small>Multipack Set</small>
                                        <p>Single</p>
                                    </div>
                                    <div>
                                        <small>Neck</small>
                                        <p>Round Neck</p>
                                    </div>
                                    <div>
                                        <small>Occasion</small>
                                        <p>Casual</p>
                                    </div>
                                </div>
                                <div>
                                    <p>See More</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>RATINGS</h3>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <p>4.2</p>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p>2.8k Verified Buyers</p>
                                </div>
                                <div>
                                    <div>5 <i className="fa-solid fa-star"></i>
                                        <div>
                                            <div></div>
                                        </div> 1665
                                    </div>
                                    <div>4 <i className="fa-solid fa-star"></i>
                                        <div>
                                            <div></div>
                                        </div> 530
                                    </div>
                                    <div>3 <i className="fa-solid fa-star"></i>
                                        <div>
                                            <div></div>
                                        </div> 235
                                    </div>
                                    <div>2 <i className="fa-solid fa-star"></i>
                                        <div>
                                            <div></div>
                                        </div> 110
                                    </div>
                                    <div>1 <i className="fa-solid fa-star"></i>
                                        <div>
                                            <div></div>
                                        </div> 248
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>WHAT CUSTOMERS SAID</h3>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div>
                                <div>
                                    <p>Fit</p>
                                    <div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>Just Right (69%)</div>
                                    </div>
                                </div>
                                <div><p>Length</p>
                                    <div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>Just Right (75%)</div>
                                    </div>
                                </div>
                                <div>View Details</div>
                            </div>
                            <div>
                                <h3>Customer Photos(67)</h3>
                                <div>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/9/13/34c5786f-d260-4964-b3d9-2d771f78bc2e1599984902206-IMG20200912164916.jpg" alt='' />
                                    </div>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2022/9/1/551fdad7-80da-43e4-a2bf-a9b395d2bcfc1662015403046-IMG_20220901_100549.jpg" alt='' />
                                    </div>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/9/13/60622de5-eea2-4eab-b01d-a6544039bd641599984904727-IMG20200912164809.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Customer Reviews(281)</h3>
                                <div>
                                    <div>
                                        <p>5</p>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div>
                                        <p>amzing product the color is also elegant
                                        </p>
                                        <div>
                                            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2021/5/17/1e200bed-92a8-4da2-b23c-6633ee9ba71e1621241304282-3D808F50-F592-4B2C-8F22-F9D1B1B8F36B.jpeg" alt='' />
                                        </div>
                                        <div>
                                            <div>
                                                <p>Sakshi Bhutada</p>
                                                <p>17 May 2021</p>
                                            </div>
                                            <div>
                                                <div>
                                                    <i className="fa-regular fa-thumbs-up fa-flip-horizontal"></i>
                                                    <p>112</p>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-thumbs-down"></i>
                                                    <p>17</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Customer Reviews(281)</h3>
                                <div>
                                    <div>
                                        <p>5</p>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div>
                                        <p>It is a lovely product..the quality is amazing as well as the colour,loved it and got it at 319 only which was a great deal.
                                        </p>
                                        <div>
                                            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/10/27/243401b4-dca1-4ec7-a1dc-084d0a4832e71603779295295-IMG20201011132358.jpg" alt='' />
                                        </div>
                                        <div>
                                            <div>
                                                <p>Brishti Raychaudhuri</p>
                                                <p>27 Oct 2020</p>
                                            </div>
                                            <div>
                                                <div>
                                                    <i className="fa-regular fa-thumbs-up fa-flip-horizontal"></i>
                                                    <p>211</p>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-thumbs-down"></i>
                                                    <p>30</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>Customer Reviews(281)</h3>
                                <div>
                                    <div>
                                        <p>5</p>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div>
                                        <p>Favorite ☺️💓
                                        </p>
                                        <div>
                                            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/9/13/34c5786f-d260-4964-b3d9-2d771f78bc2e1599984902206-IMG20200912164916.jpg" alt='' />
                                        </div>
                                        <div>
                                            <div>
                                                <p>Mona</p>
                                                <p>13 Sept 2020</p>
                                            </div>
                                            <div>
                                                <div>
                                                    <i className="fa-regular fa-thumbs-up fa-flip-horizontal"></i>
                                                    <p>552</p>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-thumbs-down"></i>
                                                    <p>73</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>View all 281 reviews</p>
                                <p>Product code: <strong>8923841</strong> </p>
                                <p>Seller: <strong>Truecom Retail</strong> </p>
                                <p>View Supplier Information</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ***Footer*** --> */}
                <div id="footer">
                    <div>
        
        
                        <div>
                            <h4>online shopping</h4>
                            <h5>Men</h5>
                            <h5>Women</h5>
                            <h5>Kids</h5>
                            <h5>Home & Living</h5>
                            <h5>Beauty</h5>
                            <h5>Gift Cards</h5>
                            <h5>Myntra Insider</h5>
        
                            <h4>useful links</h4>
                            <h5>Blog</h5>
                            <h5>Careers</h5>
                            <h5>Site Map</h5>
                            <h5>Corporate Information</h5>
                            <h5>Whitehat</h5>
                        </div>
        
        
                        <div>
                            <h4>Customer Policies</h4>
                            <h5>Contact Us</h5>
                            <h5>FAQ</h5>
                            <h5>T&C</h5>
                            <h5>Terms of Use</h5>
                            <h5>Track orders</h5>
                            <h5>Shipping</h5>
                            <h5>Cancellation</h5>
                            <h5>Returns</h5>
                            <h5>Privacy Policy</h5>
                            <h5>Grievance Officer</h5>
                        </div>
        
        
                        <div>
                            <h4>Experience Myntra App on mobile</h4>
                            <div>
                                <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="android-img" />
                                <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="ios-image" />
                            </div>
                            <h4>Keep in Touch</h4>
                            <div>
                                <i className="fa-brands fa-square-facebook fa-2x"></i>
                                <i className="fa-brands fa-square-twitter fa-2x"></i>
                                <i className="fa-brands fa-youtube fa-2x"></i>
                                <i className="fa-brands fa-square-instagram fa-2x"></i>
                            </div>
                        </div>
        
        
                        <div>
                            <div>
                                <h4><b>100% ORIGINAL</b> guarantee for all products at myntra.com</h4>
                            </div>
                            <div>
                                <h4><b>Return within 30 days</b> of receiving your order</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default singleProduct;