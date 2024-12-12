import React from "react";
import './header.sass'
import Button from "../Button/Button"


const Header = () => {


    return(
    <>
    <div className="headerContainer">
        <h1 id="compName"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png" alt="logo" srcset="" />Jensen Medier</h1>
        <ul>
            <li><a href=".">Link 1</a></li>
            <li><a href=".">Link2</a></li>
            <li><a href=".">Link 3</a></li>
            <li><a href=".">L4</a></li>
            <div className="buttonsWrap">
            <li id="button1"><a href=".">Important1</a></li>
            <li id="button2"><a href=".">Important2</a></li>
            <Button />
            </div>

        </ul> 
    </div>
    </>
    )
}
export default Header;