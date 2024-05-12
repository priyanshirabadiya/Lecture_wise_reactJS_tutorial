import React from 'react'
import './App.css'
import { useSelector , useDispatch } from 'react-redux';
import { Increment } from './Redux/Action/action';
import { decrement } from './Redux/Action/action';

const App = () => {
  const mystate = useSelector((state) => state.changethenumber )
  console.log(mystate);
  const dispatch = useDispatch();
  return (
    <div>
      
      <div className='center' >
        Increment and decrement
      </div>
      <div className='center' >
        <button title='Increment' onClick={() => dispatch(Increment())} >Increment</button>
        <input type="text" value={mystate} />
        <button title='decrement' onClick={() => dispatch(decrement())} >decrement</button>
      </div>
    </div>
  )
}

export default App;


