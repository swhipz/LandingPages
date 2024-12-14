import Header from "./components/Header/Header"
import MobileNav from "./components/MobileNav/MobileNav"
import './app.sass';
import Hero from "./components/Hero/Hero";
import SectionOne from "./components/Sections/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo";

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="bgColorOne">
        <header className="headerbar">
          <Header />
      </header>

      <div className="mobileNav">
        <MobileNav/>
      </div>

      <section className="heroElement">
        <Hero />
      </section>

    </div>       
    <div className="bgColorThree">
    <section className="sectionOne">
        <SectionOne/>
    </section>
    </div>
      <SectionTwo />
    
    <div className="bgColorTwo">
     <h4>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quae maiores deleniti velit voluptate quaerat numquam atque rerum fugit harum. Nesciunt eligendi beatae et dignissimos nulla? Molestiae, perferendis. Perspiciatis quod sapiente minima cupiditate, omnis in sequi labore quas fugiat rerum."</h4> 
     <button>See our customer's story</button>
    </div>
    <div className="bgColorThree">
      <h5>Analytics</h5>
    </div>
    <div className="bgColorFour">
      <p className="ptext">Lorem balls</p>
    </div>
    <div className="bgColorThree">
      <p>footer</p>
    </div>
    </div>
    </div>
    
  );
}

export default App;
