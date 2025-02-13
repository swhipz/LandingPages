import './hero.css';
import  IMG1  from "./wagon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hero = () =>  {

  

  return(
    <>
    <div className="hero-wrapper" style={{display: "flex", width:"100%", height:"100vh", justifyContent:"center"}}>
      <div className="hero-content">
        <h1>Proteinvogna</h1>
        <div className="content-split-for-desktop">
          <div className='hero-left'>Et sunnere alternativ i en hektisk hverdag 
          
          <br/><button className="cta-hero"><FontAwesomeIcon icon={faLocationDot} style={{color:"#EF5350"}}/> Plassering</button>
          </div>
           
            <img src={IMG1} alt='wagon'  className='wagon-img'/>
            
        </div>
      </div>
    </div>
    </>
  );
}
export default Hero;