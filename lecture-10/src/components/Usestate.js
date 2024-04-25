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


