import "./header.css";

const Header = () => {
  return(
    <>
    <div className="header-wrap">
          <h1><i>Microsoft <div className="copy">&copy;</div> </i></h1>

          <div className="global-navigation">
            <ul className="global-navigation-list">
              <li>Home</li>
              <li>Trending/Events</li>
              <li>Subscribe</li>
              <li>About Microsoft</li>
              <li>Downloads</li>
              <li>Worldwide</li>
              <li style={{borderRight:"none"}}>MSN</li>
            </ul>
          </div>
    </div>
    </>
  )
}
export default Header;