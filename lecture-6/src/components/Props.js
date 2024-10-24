import React from "react";
export default function Task(props) {
  console.log(props, "===");
  return (
    <div>
      <h1>
        Name : {props.name} <br />
        <img src={props.img} alt="" />
        <br />
        name:{props.name} <br />
        disc : {props.disc} <br />
        course : {props.course}
      </h1>
    </div>
  );
}

