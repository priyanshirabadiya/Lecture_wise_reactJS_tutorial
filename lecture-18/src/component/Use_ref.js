import React ,{useRef} from "react"
export default function Myfun(){
    const ref = useRef(0);
    console.log(ref,"ref");;

    const handleref = () => {
        // ref.current.focus()
        // ref.current.style.color = "red"
        ref.current.style.display = "none"
    }

    return (
        <>
        <input type="text" ref={ref} />
        <button onClick={handleref} style={{border:"5px solid black"}} >click me</button>
        </>
    )
}