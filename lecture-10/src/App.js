import logo from './logo.svg';
import './App.css';
import Usestate from './components/Usestate'
import Component from './components/Classcompo'
import Textform from './components/Task'

function App() {
  let a = 2;
  return (
    <div className="App">
       {/* <Usestate/> */}
       <Component/>
        <Textform/>
    </div>
  );
}

export default App;
