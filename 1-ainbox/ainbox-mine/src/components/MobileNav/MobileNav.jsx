import react from "react";
import { useState } from "react";
import './mobilenav.sass';






const MobileNav = () => {
    const [toggle, setToggle] = useState(false)

    
    
    

    return (
        <>
        <div className="mobMenuIcon">
        <button id ="menuButton" onClick={()=> setToggle(!toggle)}>
            <span></span>
            <span></span>
            <span></span>
         </button>
        <div id="mobMenuCont" className="menuContainer" style={{display: toggle ? "block" : "none"}}> {/* ? = if true, : = if false */}
        <ul>
            
            <li><a href=".">mitem1</a></li>
            <li><a href=".">mitem2</a></li>
            <li><a href=".">mitem3</a></li>
            <li><a href=".">mitem4</a></li>
        </ul>
        </div>
        </div>
        </>
    )
}
export default MobileNav;