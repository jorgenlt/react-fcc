import './App.scss';
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;
