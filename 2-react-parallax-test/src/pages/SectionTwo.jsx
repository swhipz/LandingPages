import "../container/sectionStyle.css"


const SectionOne = () => {
    
 
    return (
        <>
        <div className="breather">
            <div className="centerWrap">
            <div className="text">
                <h3>Those who know</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam error similique voluptatum. Quos perferendis officiis natus alias assumenda officia vel! Maxime, aperiam voluptates? Laudantium, saepe!</p>
            </div>
            <div className="imgwrap">
            <img src="https://www.svgrepo.com/show/509003/avatar-thinking-6.svg" width="100%" alt="" />
            </div>
            </div>
        </div>
        <div className="breaker">
            <div className="nokWrap">
                <h4 id="norway">Norway.</h4>
                <img id="nok"src="https://www.svgrepo.com/show/508456/flag-bv.svg" alt="" />
            </div>
        </div>
        </>
    );
}
export default SectionOne;