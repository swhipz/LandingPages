import './hero.css';
import  IMG1  from "./wagon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

const Hero = () =>  {

  

  return(
    <>
    <div className="hero-wrapper" style={{display: "flex", width:"100%", height:"100vh", justifyContent:"center"}}>
      <div className="hero-content">
        <h1>Proteinvogna</h1>
        <div className="content-split-for-desktop">
          <div className='hero-left'><div className="hero-text">Et sunnere alternativ <br /> i en hektisk hverdag </div> 
          
          <br/>
          <button className="cta-hero"><FontAwesomeIcon icon={faLocationDot} style={{color:"#EF5350", position:"relative", left:"-15px"}}/>Se dagens Plassering </button>
          </div>
            <img src={IMG1} alt='wagon'  className='wagon-img' style={{width:"150vw"}}/>
            
        </div>
        
      </div>
      <div className="set-pulsate">
        <FontAwesomeIcon icon={faArrowDownShortWide} style={{position:"absolute", height:"4rem", top:"85vh", left:"42vw"}}/>
      </div>
    </div>
    </>
  );
}
export default Hero;