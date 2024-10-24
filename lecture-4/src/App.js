import logo from './logo.svg';
import './App.css';
import Img from "./components/Image";
import Ulli, { Olli } from "./components/Ulli";
import Rendaring from "./components/Rendaring";

function App() {
  return (
    <div className="App">
      <Ulli></Ulli>
      <Olli></Olli>
      <Img/>
      {/* <Rendaring/> */}
    </div>
  );
}

export default App;
