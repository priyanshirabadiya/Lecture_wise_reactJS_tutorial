import logo from './logo.svg';
import React, { useReducer } from 'react'
import './App.css';

let initialArg = 0;

const reducer = (state, action) => {
  console.log(state, action, "state", "action");
  if (action.type == "increment") {
    return state + 1;
  }
  if (action.type == "decrement") {
    return state - 1;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <div className="App">
      {state}<br />
      <button onClick={() => { dispatch({ type: "increment" }) }} >increment</button>
      <button onClick={() => { dispatch({ type: "decrement" }) }} >decrement</button>
    </div>
  );
}

export default App;
