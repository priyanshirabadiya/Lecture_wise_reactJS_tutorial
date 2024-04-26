import React, { useState, useEffect, useRef } from "react"
export default function Myfun() {
    const refid = useRef(0);
    console.log(refid, "ref");

    // Use of useref is it is that :1: we can directly manupulate dom
    //                             :2: solution of rendering all time

    // -------------------------------------------------------------------------------
    // const[count , setcount] = useState(0);
    // // let a = 0;
    // const a = useRef(0);

    // const handleref = () => {
    //     setcount(count + 1);
    // }

    // useEffect(()=>{
    //     a.current = a.current + 1;
    //     console.log('clicked');
    //     console.log(`value of a is ${a.current}..`);
    // })
    // ---------------------------------solution of this problem is this----------------------------------------------

    const handleref = () => {
        refid.current = refid.current + 1;
        alert("you cliked " + refid.current + " times");
        // ref.current.focus()
        // ref.current.style.color = "red"
        // ref.current.style.display = "none"
    }

    return (
        <>
            <input type="text" />
            <button onClick={handleref} style={{ border: "5px solid black" }} >click me</button>
        </>
    )
}


// import { useState, useRef } from 'react';

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <video
//         width="250"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// }
