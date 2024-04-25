// import logo from './logo.svg';
// import './App.css';
// import Props from "./components/Props";
// import Data from './components/Data';

// {/* If there are multiple components to return then we need to add key value in another tag or else it give an error ex: <div key = {index}></div> */}

// function App() {
//   return (
//     <div className="App">
//       <div className="flex justify-between w-full">
//         {Data.map((cvalue, ind, arr) => {
//           console.log(cvalue, "cvalue");
//           return (
//               <div key={ind}>
//                 <Props
//                   // key={ind}
//                   name={cvalue.name}
//                   disc={cvalue.disc}
//                   course={cvalue.course}
//                 /><br />
//                 <Props
//                   // key={ind}
//                   name={cvalue.name}
//                   disc={cvalue.disc}
//                   course={cvalue.course}
//                 />
//               </div>
            
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// or you can give like this also

// import './App.css';
// import data from './components/Practice/Data'
// import PropsSec from './components/Practice/Props'

// function App() {
//   return (
//     <>
//     <div className="flex justify-between">
//       {data.map((cvalue, ind, arr) => {
//         return (
//             <PropsSec
//               key={ind}
//               earings={cvalue.earings}
//               per={cvalue.per}
//               pno={cvalue.pno}>
//             </PropsSec>
//         )
//       })}
//       </div>
//       {/* <PropsSec/>
//       <PropsSec/>
//       <PropsSec/>
//       <PropsSec/> */}
//     </>
//   );
// }

// export default App;




// import React from 'react'
// import Data from './components/Data'
// import Props from './components/Props'

// export default function App() {
//   return (
//     <div className='flex w-full justify-between' >
//       {Data.map((cvalue,ind,arr) => {
//         return(
//           <div key={ind} >
//             <Props 
//               name={cvalue.name}
//               disc = {cvalue.disc}
//               course = {cvalue.course}
//             ></Props>
//          </div>
//         )
//       })}
//     </div>
//   )
// }








