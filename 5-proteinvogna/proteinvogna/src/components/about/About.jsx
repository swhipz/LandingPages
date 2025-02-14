import './about.css';
import imgLady from './medium-shot-smiley-woman-with-yoga-mat.jpg';

const About = () => {
  return (
    <>
    <div className="about-wrapper">
      <div className="about-bg1">
        <div className="bg1-text">
          <div className="bg1-content">
            <div className="bg1-card">
              <div className="card-left"><img src={imgLady} alt="img-lady-yoga-mat" className='card-img-1' /></div>
              <div className="card-right">
              <h4>Johanna (29)👋</h4>
              <ul>
              <li>Advokatfullmektig</li>
              <li>Yogaentusiast</li>
              <li>Kostholdsveileder</li></ul>
              <p><em>Månedens kunde (februar)</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default About;