import React from "react";
import './header.sass'



const Header = () => {


    return(
    <>
    <div className="headerContainer">
        <h1 id="compName"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png" alt="logo" srcset="" />Jensen Medier</h1>
        <ul>
            <li><a href=".">Why Jensen?</a></li>
            <li><a href=".">Product</a></li>
            <li><a href=".">Pricing</a></li>
            <li><a href=".">Successes</a></li>
            <div className="buttonsWrap">
            <li id="button1"><a href=".">Important1</a></li>
            <li id="button2"><a href=".">Important2</a></li>
            </div>
        </ul> 
    </div>
    </>
    )
}
export default Header;