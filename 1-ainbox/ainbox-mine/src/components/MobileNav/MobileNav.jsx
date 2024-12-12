import REACT from "react";
import { useState } from "react";
import './mobilenav.sass';






const MobileNav = () => {
    const [toggle, setToggle] = useState(false)

    
    
    

    return (
        <>
        <div className="mobMenuIcon">
        <button id ="menuButton" onClick={()=> setToggle(!toggle)}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="17.2" width="10" height="1.6" fill="#2065b4"/>
            <rect x="13" y="13.2" width="6" height="1.6" fill="#2065b4"/>
            <rect x="5" y="9.2" width="14" height="1.6" fill="#2065b4"/>
            <rect x="9" y="5.2" width="10" height="1.6" fill="#2065b4"/>
            </svg>
         </button>
        <div id="mobMenuCont" className="menuContainer" style={{display: toggle ? "block" : "none"}}> {/* ? = if true, : = if false */}
        <nav className="menuDeclaration">Menu</nav>
        <ul>
            <li><a href=".">Link one</a></li>
            <li><a href=".">Link Two</a></li>
            <li><a href=".">About Us</a></li>
            <li><a href=".">Contact</a></li>
        </ul>
        </div>
        </div>
        </>
    )
}
export default MobileNav;