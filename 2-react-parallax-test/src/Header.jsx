import "./container/headerStyle.css"
const Header = () => {
    return(
        <>
        <div className="sticky-header">
        <header>
            <div className="logo"><h1><a href="#">.Medier</a></h1></div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        </div>
        </>
    );
}
export default Header;