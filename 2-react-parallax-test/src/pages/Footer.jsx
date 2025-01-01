import '../container/footerStyle.css';

const Footer = () => {
    return(
        <>
        <div className="wrap">
        <div className="footer">
            <div className="footerNav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="paym">
            <img src="https://www.svgrepo.com/show/508402/apple-pay.svg" height="66px" style={{zIndex:"99"}} alt="" />
            <img src="https://www.svgrepo.com/show/508408/bitcoin.svg" height="66px" style={{zIndex:"99"}} alt="" />
            <img src="https://www.svgrepo.com/show/508403/amex.svg" height="66px" style={{zIndex:"99"}} alt="" />
            </div>
           <p class="info">	&copy; .Medier all rights reserved</p>
        </div>
        </div>
        </>
    )
}
export default Footer;