// import logo from './logo.svg';
// import './App.css';
// import Props from "./components/Props";
// import Data from './components/Data';
// function App() {
//   return (
//     <div className="App">
//       <div className="flex">
//         {Data.map((cvalue, ind, arr) => {
//           console.log(cvalue, "cvalue");
//           return (
//             <Props
//               key={ind}
//               name={cvalue.name}
//               disc={cvalue.disc}
//               // img={cvalue.img}
//               course={cvalue.course}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;




import './App.css';
import data from './components/Practice/Data'
import PropsSec from './components/Practice/Props'

function App() {
  return (
    <>
      {/* {data.map((cvalue, ind, arr) => {
        return (
          <>
          <div>
            <PropsSec
              key={ind}
              earings={cvalue.earings}
              per={cvalue.per}
              pno={cvalue.pno}>
            </PropsSec>
            </div>
          </>
        )
      })} */}
      <PropsSec/>
      <PropsSec/>
      <PropsSec/>
      <PropsSec/>
    </>
  );
}

export default App;