import './App.css';
import {useMemo, useState} from 'react';

function App() {
   const [count  , setCount] = useState(0);
   const [item , setItem] = useState(10);

  //  function multiFun(){
  //   console.log("multiple time calling ")
  //     return count * 5 ;
  //  }

 const multiFunction = useMemo(
  function multiFun(){
    console.log("multiple time calling ")
      return count * 5 ;
   }, [count]
 ) 

  return (
    <div className="App">
        <h1>HOOK - useMemo</h1>

        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Click Count</button>
        <br/>
  
        {/* <h1>{multiFun()}</h1> */}
        <h1>{multiFunction}</h1>

        <br/>
        <h1>{item}</h1>
        <button onClick={()=> setItem(item * 10)}>Item</button>
    </div>
  );
}

export default App;























// import React , {useState , useMemo} from 'react'

// const nums = new Array(10_000_000).fill(0).map((_,i) => {
//   return{
//     index : i,
//     isMagic : i === 9_000_000
//   }
// })

// export default function App() {

//   const[count , setcount] = useState(0);
//   const[numbers, setNumbers] = useState(nums);

//   const magic = useMemo(()=> numbers.find(item => item.isMagic === true),[numbers])

//   return (
//     <div>
//       <div>
//         <span>Magical number is </span>
//         <a href="https://vitejs.dev" target="_blank">
//         </a>
//         <a href="https://react.dev" target="_blank">
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick = {() => {
//           setcount((count) => count + 1);
//           if(count == 10){
//             setNumbers(new Array(10_000_000).fill(0).map((_, i)=>{
//               return {
//                 index: i,
//                 isMagical: i===9_000_000
//               }
//             }))
//           }
        
//         }} >
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }





