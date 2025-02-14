import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero'
import Location from './components/locations/Locaiton';
import Meny from './components/menu/Menu';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Hero />
      <Location />
      <Meny />
      <About />
    </div>
  );
}

export default App;
