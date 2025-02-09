import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="spacer" style={{height: "200vh", backgroundColor:"#292929"}}></div>
      <div className="spacer" style={{height: "50vh", backgroundColor:"#f9f9f9"}}></div>
      <div className="spacer" style={{height: "200vh", backgroundColor:"#292929"}}></div>

    </div>
  );
}

export default App;
