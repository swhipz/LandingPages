import "./main.css";


const Main = () => {
  return(
    <>
    <div className="main-wrap">
      <div className="main-promoted-wrap">
      <h1 className="main-content">promoted content</h1>
      <section className="snapshots">
      <div className="img">🐕</div>
       <div className="snapshots text">
          <h2>Take your best shot</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quis enim dolorum quos saepe nostrum, soluta animi vitae incidunt perferendis fugiat magnam unde officia illum.</p>
        </div>
      </section>
    </div>
   
    <div className="main-official-wrap">
     <h1 className="main-content">official</h1>

        <div className="downloads-wrap">
          <div className="official-header">Downloads</div>
          <ul>
            <li><a href=".">10 April 2002 Culumative Patch for IIS.</a>
             <p>Protect Web servers using Microsoft Windows NT 4.0, windows 2000, or Windows XP</p>
            </li>
            <li>
              <a href=".">28 March 2002 Culumative Patch for Internet Explorer</a>
              <p>Get all of the latest security fixes in one convenient download.</p>
            </li>
            <a href=".">More Downloads</a>
          </ul>
        </div>

          <div className="todays-news-wrap">
            <div className="official-header">Today's News</div>
            <ul>
              <li>
                <a href=".">Microsoft to acquire Navision.</a>
                <p>Read the Q&A with Microsoft senior VP Doug Burgum.</p>
              </li>
              <li>
                <a href=".">Easy digital imaging for your business</a>
                <p>Get tips for scanning and editing photos for print, email and the Web.</p>
              </li>
              <li>
                <a href=".">Windows XP questions answered.</a>
                <p>Is Windows XP more reliable? Which edition is best for networks? Find answers to these questions and more.</p>
              </li>
              <a href=".">More News</a>
            </ul>
          </div>

      </div>
    </div>
    
    </>
  )
}
export default Main;