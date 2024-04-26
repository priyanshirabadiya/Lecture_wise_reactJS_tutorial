import React , {useContext} from 'react'
import { context1 } from '../App'
export default function ComC() {
  const value = useContext(context1)
  return (
    <div>
      <p>name is ... {value} </p>
    </div>
  )
}


// import React,{useContext} from 'react'
// import { context1 } from '../App'
// export default function ComC() {

//   let value = useContext(context1)

//   return (
//     <div>
//       <p>hello my name is ... {value.count}</p>
//       <button onClick={() => value.setcount((count) => count + 1)} >click here</button>
//     </div>
//   )
// }
