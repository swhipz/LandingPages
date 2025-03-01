import "./aside.css";

const Aside = () => {
  return(
    <>
    <div className="aside-wrap">
      <div className="search-wrap">
        <p>Search</p>
        <div className="input-button">
          <input type="text" name="search" id="search" />
          <button type="submit" className="search-go-button">GO</button>
        </div>
        <a href=".">Advanced Search</a>
      </div>
          <ul className="product-fam">
          <p>Product Families</p>
            <li>Windows</li>
            <li>Office</li>
            <li>Servers</li>
            <li>Developer Tools</li>
            <li>Great Plains Applications</li>
            <li>All Products</li>
          </ul>
          <ul className="resources">
          <p>Resources</p>
            <li>Support</li>
            <li>Communities</li>
            <li>Windows Update</li>
            <li>Office Tools</li>
            <li>Security</li>
            <li>About .NET</li>
            <li>Books</li>
            <li>Jobs</li>
          </ul>
          <ul className="information-for">
            <p>Information For</p>
            <li>Home/Home Office</li>
            <li>IT Professionals (TechNet)</li>
            <li>Developers (MSDN)</li>
            <li>Small Businesses</li>
            <li>Microsoft Partners</li>
            <li>Educators</li>
            <li>Journalists</li>
          </ul>
          
    </div>
    </>
  )
}
export default Aside;