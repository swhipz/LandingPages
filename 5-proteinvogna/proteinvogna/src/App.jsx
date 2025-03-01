import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero'
import Location from './components/locations/Locaiton';
import Meny from './components/menu/Menu';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import back from "./backarrow.svg";


function App() {
  return (

    <div className="App">
      <a className="back" href="https://fredrikjensen.no/fredrikjensen/articles/articles/articles.html"><img src={back} alt="back" /></a>
      <Hero />
      <Location />
      <Meny />
      <About />
      <Footer />
    </div>
  );
}

export default App;
