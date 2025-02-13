import './hero.css';
import  IMG1  from "./wagon.png";

const Hero = () =>  {

  

  return(
    <>
    <div className="hero-wrapper" style={{display: "flex", width:"100%", height:"100vh", justifyContent:"center"}}>
      <div className="hero-content">
        <h1>Proteinvogna</h1>
        <div className="content-split-for-desktop">
          <div className='hero-left'>Proteinvogna er et <u style={{color:"lightgreen"}}>sunnere</u> alternativ <br /> i en hektisk hverdag</div>
            <img src={IMG1} alt='wagon'  className='wagon-img'/>
        </div>
      </div>
    </div>
    </>
  );
}
export default Hero;