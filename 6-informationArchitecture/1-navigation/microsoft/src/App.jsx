import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Aside from "./aside/Aside";
import Main from "./main/Main"
import backarrow from "./backarrow.svg";
function App() {
  return (
    <div className="App">
       <a class="back" href="https://fredrikjensen.no/fredrikjensen/articles/articles/articles.html"><img src={backarrow} alt="back" /></a>
      <Header />
      <div className="collect">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
