import React from "react";
let arr = ["anjj", "jjj", "uuu"];
const name = 'Rendering';
const listitem = {
  fname: "priyanshi",
  sname: "rabadiya",
  Location: "Delhi"
}
const Rendaring = () => {
  return (
    <>
      {/* rendering list */}
      {arr.map((cvalue, ind, arr) => {
        return (
          <>
            <h1>
              {cvalue}
              {ind}
              {arr}
            </h1>
          </>
        );
      })}
      {/* rendring expresion */}
      <p>Lorem, ipsum dolor.{5 * 2}</p>
      <h1>hello ma'am : good morning</h1>
      {/*  expression rendering  */}
      <h1>{name}</h1>
      {/* List rendering  */}
      <h1>{listitem.fname}</h1>
      {/* Image rendering in image.JS */}
    </>
  );
};

export default Rendaring;
