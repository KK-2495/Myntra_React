import react from "react";
import "../Components/AllCss/Register.css"

const Register = () => {
  return (
    <>
     <div class="main">
        <div class="navBar">
            <div class="navBar0">
                <img src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="Myntra logo" />
            </div>
            <div class="navBar1">
                <a href="/menTshirt.html">
                    <li>MEN</li>
                </a>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>HOME & LIVING</li>
                <li>BEAUTY</li>
                <li>STUDIO <sup>NEW</sup></li>
            </div>
            <div class="navBar2">
                <i class="fa-solid fa-magnifying-glass">
                    <input type="text" value="" placeholder="Search for products,brands and more" />
                </i>

            </div>
            <div class="navBar3">
                <div class="navBarLast">
                    <i class="fa-regular fa-heart"></i>
                    <p>Wishlist</p>
                </div>
                <div class="navBarLast">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p>Bag</p>
                </div>
            </div>
        </div>
        <div class="loginform">
            <form onsubmit="register(event)">
                <div class="loginImg">
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" alt="" />
                </div>
                <div class="userinfo">
                    <h3>Sign Up</h3>
                    <input id="userName" type="text" placeholder="User Name" />
                    <input id="userEmail" type="email" placeholder="Enter your email" />
                    <input id="userPassword" type="password" placeholder="Enter password"/>
                    <input id="userConfirmPassword" type="password" placeholder="Confirm password"/>
                    <p>By continuing, I agree to the <b>Term of Use</b>& <b>Privacy policy</b></p>
                    <input class="submit" type="submit" value="Register" />
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register;