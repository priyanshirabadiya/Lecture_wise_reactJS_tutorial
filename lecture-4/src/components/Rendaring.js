// import React from "react";
// let arr = ["anjj", "jjj", "uuu"];
// const name = 'Rendering';
// const listitem = {
//   fname: "priyanshi",
//   sname: "rabadiya",
//   Location: "Delhi"
// }
// const Rendaring = () => {
//   return (
//     <>
//       {/* rendering arr list */}
//       {arr.map((cvalue, ind, arr) => {
//         return (
//           <>
//             <h1>
//               {cvalue}<br/>
//               {ind}<br/>
//               {arr}<br/>
//             </h1>
//           </>
//         );
//       })}

      // {/* rendring expresion */}
      // {/* <p>Lorem, ipsum dolor.{5 * 2}</p>
      // <h1>hello ma'am : good morning</h1> */}

      // {/*  expression rendering  */}
      // {/* <h1>{name}</h1> */}

      // {/* List rendering  */}
      // {/* <h1>{listitem.fname}</h1> */}
      // {/* Image rendering in image.JS */}
//     </>
//   );
// };

// export default Rendaring;


import React from 'react'

export default function Rendaring() {
  const arr = ['anshu','priyanshi','krish'];
  return (
    <div>
       {arr.map((cvalue,index,arr)=>{
        return(
          <>
          {cvalue}<br/>
          </>
        )
        })}
    </div>
  )
}


