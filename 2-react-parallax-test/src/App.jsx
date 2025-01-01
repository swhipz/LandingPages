import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SectionOne from './pages/SectionOne';
import SectionTwo from './pages/SectionTwo';
import Background1 from './media/Background1';
import Background2 from './media/Background2';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Background1 />
      <SectionOne />
      <SectionTwo />
      <Background2 />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
