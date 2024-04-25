import React from "react";

// export default function Props(props) {
//   console.log(props, "===");
//   return (
//     <div>
//       <h1>
//         Name : {props.name} <br />
//         <img src={props.img} alt="" />
//         <br />
//         name:{props.name} <br />
//         disc : {props.disc} <br />
//         course : {props.course}
//       </h1>
//     </div>
//   );
// }

// show difference
// De-starucring ▶ short description of props

// const Props = ({name,img,course,disc}) => {
//   return (
//     <>
//       <p>
//         Name : {name} <br />
//         course : {course} <br />
//         disc : {disc}
//         <p>this is included</p>
//       </p>
//     </>
//   );
// };

// export default Props;



const Props = ({name,disc,course}) => {
  return (
    <>
      <p>
        name is : {name}<br/>
        discription is : {disc}<br/> 
        course is : {course}
      </p>
    </>
  )
}

export default Props;

