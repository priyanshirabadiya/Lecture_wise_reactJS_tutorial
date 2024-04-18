import logo from './logo.svg';
import './App.css';
import ULtask from './components/Mytasks/ULtask';
import UseState from './components/Usestate'
import Component from './components/Classcompo'
import Textform from './components/Task'

function App() {
  // let a = 2;
  return (
    <div className="App">
       {/* <UseState/> */}
       {/* <Component/> */}
        {/* <Textform/> */} 

        <ULtask/>
    </div>
  );
}

export default App;
