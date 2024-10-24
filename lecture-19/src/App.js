// import logo from './logo.svg';
// import React, { useReducer } from 'react'
// import './App.css';

// let initialArg = 0;

// const reducer = (statefirst, action) => {
//   console.log(statefirst, action, "statefirst", "action");
//   if (action.type == "increment") {
//     return statefirst + 1;
//   }
//   if (action.type == "decrement") {
//     return statefirst - 1;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialArg);
//   return (
//     <div className="App">
//       {state}<br />
//       <button onClick={() => { dispatch({ type: "increment" }) }} >increment</button>
//       <button onClick={() => { dispatch({ type: "decrement" }) }} >decrement</button>
//     </div>
//   );
// }

// export default App;


import React, { useReducer } from 'react'
let intialstate = 0;

const reducer = (fstate, action) => {
  if (action.type == "incre") {
    return fstate + 1
  }
  else {
    return fstate - 1;
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, intialstate);

  return (
    <div>
      {state}<br />
      <button onClick={() => dispatch({ type: "incre" })} >click here</button>
      <button onClick={() => dispatch({ type: "decre" })} >decre</button>
    </div>
  )
}



// import React, { useState } from 'react';
// export default function App() {
//   let [state, setState] = useState(0);

//   const incre = () => {
//     setState(state + 1);
//   }

//   const decre = () => {
//     setState(state - 1);
//   }

//   return (
//     <>
//       <button onClick={incre} >increment button</button>
//       <p>{state}</p>
//       <button onClick={decre} >decrement button</button>
//     </>
//   )
// }



/**
 import React, { useState } from 'react'
export default function UseState() {

  const [count, setCount] = useState(0)

  const myFun = () => {
    console.log('Click');
    setCount(count + 1);
  }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={myFun} >Click me</button>
    </div>
  );
}


 */