import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/AllCss/Register.css"
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({ name: "", email:"", password:"", confirmPassword:"" });
    console.log(userData,"userdata");
    const handleChange = (event) =>{
        setUserData({ ...userData,[event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword){
            if(userData.password === userData.confirmPassword){
                try {
                    const response = await axios.post("http://localhost:8000/api/v1/register", userData );
                    if(response.data.success){
                        setUserData({ name: '', email: "", password: "", confirmPassword: "" })
                        router('/login');
                        toast.success(response.data.message);
                      }
                } catch (error) {
                    toast.error(error.response.data.message);
                }
            }else{
                toast.error("Password and confirm Password does not match");
            }
        }else{
            toast.error("All fields are mandatory.");
        }
    }

  return (
    <>
     <div className="main">
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
                    <i className="fa-regular fa-heart"></i>
                    <p>Wishlist</p>
                </div>
                <div className="navBarLast">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <p>Bag</p>
                </div>
            </div>
        </div>
        <div className="loginform">
            <form onSubmit={handleSubmit}>
                <div className="loginImg">
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" alt="" />
                </div>
                <div className="userinfo">
                    <h3>Sign Up</h3>
                    <input id="userName" name="name" type="text" placeholder="User Name" onChange={handleChange} />
                    <input id="userEmail" name="email" type="email" placeholder="Enter your email" onChange={handleChange} />
                    <input id="userPassword" name="password" type="password" placeholder="Enter password" onChange={handleChange} />
                    <input id="userConfirmPassword" name="confirmPassword" type="password" placeholder="Confirm password" onChange={handleChange} />
                    <p>By continuing, I agree to the <b>Term of Use</b>& <b>Privacy policy</b></p>
                    <input className="submit" type="submit" value="Register" />
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register;