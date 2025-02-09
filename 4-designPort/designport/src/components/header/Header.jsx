import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
    <div className="header-container">
      <div className="header-left">
        <h1>Fredrik <br/>Jensen</h1>
      </div>
      <div className="header-right">
        <div className="navigation-wrapper">
          <ul>
            <li>Hjem</li>
            <li>Arbeid</li>
            <li>Om meg</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
export default Header;