import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

// create div-container. center/center it.
// navbar(2 x div, space between) + main section
// h1 + ul-li
// align items center in main
// paddings margins
// colors, backgrounds ++ 

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
