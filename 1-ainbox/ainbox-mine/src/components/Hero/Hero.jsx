import "./hero.sass"
const Hero = () => {
    
    return (<>
        <div className="contentWrap">
        <div className="heroWrap">
            <div className="imgWrap">
            <img src="https://framerusercontent.com/images/C9NuNBObBkTRgUVXlMaO7hm8zdU.png" alt="" />
            </div>
            <div className="textWrap">
            <h2 className="hook">Boost your good Ideas</h2>
            <p className="ptext">Our comprehensive marketing platform prioretizes your audience's needs.</p>
            <button id="button">Book Demo</button>
            </div>
            </div>
        </div>
    </>);
}
export default Hero;