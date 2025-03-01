import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Aside from "./aside/Aside";
import Main from "./main/Main"
function App() {
  return (
    <div className="App">
      <Header />
      <div className="collect">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
