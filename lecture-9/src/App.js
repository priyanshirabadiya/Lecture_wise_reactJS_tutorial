import logo from './logo.svg';
import './App.css';
import ComC from "./components/Ternary";
import Mynew from "./components/Mynew";
import TernaryOp from './components/Task';

function App() {
  let a = 2;
  return (
    <div className="App">
       {/* {(a==1) ? <ComC/> : <Mynew/>} */}

       <TernaryOp/>

    </div>
  );
}

export default App;
