import logo from './logo.svg';
import './App.css';
import Props from "./components/Props";
import Data from './components/Data';
function App() {
  return (
    <div className="App">
      <div className="flex">
        {Data.map((cvalue, ind, arr) => {
          console.log(cvalue, "cvalue");
          return (
            <Props
              key={ind}
              name={cvalue.name}
              disc={cvalue.disc}
              // img={cvalue.img}
              course={cvalue.course}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
