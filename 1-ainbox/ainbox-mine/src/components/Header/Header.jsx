import React from "react";
import './header.sass'

const Header = () => {
    return(
        <>
        <h1 id="compName">Jensen Medier</h1>
        <ul>
            <li><a href=".">Link 1</a></li>
            <li><a href=".">Link2</a></li>
            <li><a href=".">Link 3</a></li>
            <li><a href=".">L4</a></li>
            <div className="buttonsWrap">
            <li id="button1"><a href=".">Important1</a></li>
            <li id="button2"><a href=".">Important2</a></li>
            </div>
        </ul>
    </>
    )
}
export default Header;