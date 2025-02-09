import "./header.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


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
            <li>Om</li>
            <li>Kontakt</li>
            <li style={{color: "#FFF", right: "5vw"}}><FontAwesomeIcon icon={faLightbulb} /></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
export default Header;