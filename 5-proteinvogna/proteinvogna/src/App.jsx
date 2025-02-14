import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero'
import Location from './components/locations/Locaiton';
import Meny from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Hero />
      <Location />
      <Meny />
    </div>
  );
}

export default App;
