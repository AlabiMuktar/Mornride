import './App.css';
import Navbar from "./components/navbar"
import Herosection from "./components/herosection"
import Advert from './components/advert';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Advert />
    </div>
  );
}

export default App;
