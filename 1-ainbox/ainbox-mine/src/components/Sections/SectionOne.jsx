import "./section.sass"
const SectionOne = () => {
    
    return (<>
    <div className="one-main">
        <div className="featureSectionContentWrap">
        <h2 className="banner">Unlock the possibilities</h2>
            <div className="sectionWrap">
            <div className="eleWrap">
                 <div className="imgWrap">
                <img src="https://framerusercontent.com/images/vmcHWgWEs6myAQYzK7KQL9PdY.png" style={{height:'100px', width:'100px'}} alt="" />
                </div>
              <div className="sTextWrap">
                <p className="sHook">Power Surge</p>
                <p className="spText">Experience a surge of power with our platform</p>
                </div>
            </div>
            
            <div className="eleWrap">
                <div className="imgWrap">
                    <img src="https://framerusercontent.com/images/yvVmzeHeIXXTyjvu1J5JmG2IY.png" style={{height:'100px', width:'100px'}} alt="" />
                </div>
                <div className="sTextWrap">
                    <p className="sHook">Lorem, ipsum.</p>
                    <p className="spText">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            
            <div className="eleWrap">
                <div className="imgWrap">
                    <img src="https://framerusercontent.com/images/FOsmyCiIzbX7a9RiHsVd7RKSUgs.png" style={{height:'100px', width:'100px'}} alt="" />
                </div>
                <div className="sTextWrap">
                    <p className="sHook">Security Fortress</p>
                    <p className="spText">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
                </div>
        </div>
    </div>    
    </>);
}
export default SectionOne;