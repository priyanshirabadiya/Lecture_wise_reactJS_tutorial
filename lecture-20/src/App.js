import React, { createContext } from 'react'
import ComA from './components/ComA'
const context1 = createContext();
export default function App() {
  return (
    <div>
      <context1.Provider value="abc">
        <ComA />
      </context1.Provider>
    </div>
  )
}
export {context1};



// import { createContext, useState } from 'react'
// import './App.css';
// import ComA from './components/ComA';

// const context1 = createContext();

// function App() {

//   const [count, setcount] = useState(0);
//   const incre = () => {
//     setcount(count + 1); 
//   }
//   return (
//     <div className="App" >
//       <context1.Provider value={{count,setcount}} >
//         <ComA />
//       </context1.Provider>
//       {count}
//       <button onClick={incre}>click APP</button>
//     </div>
//   );
// }

// export { context1 }
// export default App;

