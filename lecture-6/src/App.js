import logo from './logo.svg';
import './App.css';
// import Props from "./components/Props";
import img from '../src/logo.svg'
import img2 from '../src/logo.svg'
import img3 from '../src/logo.svg'
import Props from './components/Task1'
import Task from './components/Props';

function App() {
  return (
    <div className="App">
      {/* <Props name = "priyanshi" age = {18} sname = "rabadiya" img = {img} ></Props>  */}

      {/* <Task name="priyanshi"  age={18} sname = "rb" /> */}

      {/* 3 cards project Task */}
      <h1 className='text-center mt-4 text-4xl font-bold' >New three components</h1>
      <div className='flex w-screen items-center justify-center flex-wrap '>
        <Props name="David Dell" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae. " img={img}  ></Props>
        <Props name="Rose Bush" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae." img={img2} ></Props>
        <Props name="Jones Gli" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae." img={img3} ></Props>
      </div>

    </div>
  );
}

export default App;
