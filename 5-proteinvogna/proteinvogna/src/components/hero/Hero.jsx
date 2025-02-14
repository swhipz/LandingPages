import './hero.css';
import  IMG1  from "./wagon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import im2 from './background-blob-service-1.png.png';
import Location from '../locations/Locaiton';

const Hero = () =>  {

  

  return(
    <>
    <div className="hero-wrapper" style={{display: "flex", width:"100%", height:"100vh", justifyContent:"center"}}>
      <div className="hero-content">
        <h1>Proteinvogna</h1>
        <div className="content-split-for-desktop">
          <div className='hero-left'><div className="hero-text">Et sunnere alternativ <br /> i en hektisk hverdag </div> 
          
          <br/>
          <button className="cta-hero" onClick={()=>{window.scroll({left: 0, top:800, behavior: 'smooth'})}}>
              <FontAwesomeIcon icon={faLocationDot} style={{color:"#EF5350", position:"relative", left:"-15px"}}/>
              Se dagens Plassering </button>
          </div>
            <img src={IMG1} alt='wagon'  className='wagon-img' style={{width:"150vw"}}/>
            
        </div>
        
      </div>
      <div className="set-pulsate">
        <FontAwesomeIcon icon={faArrowDownShortWide} style={{position:"absolute", height:"4rem", top:"85vh", left:"42vw"}}/>
      </div>
    <img src={im2} alt="blob" className='blob' />
    <img src={im2} alt="blob" className='blob2' />
    </div>
    
    </>
  );
}
export default Hero;