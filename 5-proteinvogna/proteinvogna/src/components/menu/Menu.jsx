import './menu.css';
import sidevogn from './vogna-side.png';
import waveBG from './magicpattern-wave-generator-1739638419469.png';


const Meny = () => {
  return (
    <>
    <div className="meny-bg">
    <div className="menu-wrapper">
      <div className="menu-content">
      <div className='meny-header'>menyen</div>
      <p>Vi holder det enkelt, 4 shakes, prisstige etter proteininnhold og størrelse.</p>
        <div className="menu-items">
          <div className="menu-left">
            <h4>SHAKES</h4>
            <p className="sjokobrownie">SJOKOLADE BROWNIE</p>
            <p>VANILJE</p>
            <p>NATURELL</p>
            <p>VEGANSK(SOYA)</p>
          </div>
          <strong>🥤</strong>
          <div className="menu-right">
            <h4>PRIS</h4>
            <p>40,- KR</p>
            <p>40,- KR</p>
            <p>30,- KR</p>
            <p>40,- KR</p>
          </div>
        </div>
        <div className="str-pris">
          <p>Liten (330ml): som over <em>21g protein</em>.</p>
          <p>Medium (500ml): +15kr <em>42g protein</em>.</p>
          <p>Stor (770ml): +30kr <em>63g protein</em>.</p>
        </div>
      </div>
    </div>
    <img src={waveBG} alt="wavy" className='wave-bg' />
    </div>
    </>
  )
}
export default Meny;