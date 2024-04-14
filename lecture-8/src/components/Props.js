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

const Props = ({name,img,course,disc}) => {
  return (
    <>
      <p>
        Name : {name} <br />
        <img src={img} alt="" />
        course : {course} <br />
        disc : {disc}
      </p>
    </>
  );
};

export default Props;
