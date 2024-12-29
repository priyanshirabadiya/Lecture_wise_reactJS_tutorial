import React from "react";

export default function TernaryOp() {
  let a = "👍";
  let b = "👎" ;
  let c = "👍";

  const result =
    a === b && a === c && b === c
      ? `All simbols are equal`
      : `Simbols are not equal`;

  return (
    <div
      style={{ background: "pink" }}
      className="h-screen w-screen  items-center flex justify-center"
    >
      <div
        style={{ background: "rgb(241, 5, 138)" }}
        className="h-80 w-1/3  items-center flex justify-center shadow-lg shadow-blue-500/50"
      >
        <div>
        <div className="flex justify-center ">
          <p>{a}</p>
          <p>{b}</p>
          <p>{c}</p>
        </div>
        <div className="font-sans text-lg mt-3 text-white" >{result}</div>
        </div>
      </div>
    </div>
  );
}

    