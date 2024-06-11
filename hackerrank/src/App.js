import React, { useState } from 'react'
import './styles.css'
export default function App() {

  let slides = [
    {
      title : "New turn",
      test : "Its first turn"
    },
    {
      title : "It's your turn",
      test : "Turn for you"
    },
    {
      title : "Good luck!!",
      test : "Next turn"
    }
  ]


  const [currectpage , setpages ] = useState(0);
  const [ prevpage , setprevpage] = useState(true);
  const [ lastpage , setlastpage] = useState(false);
  // console.log(slides[currectpage].title);
  const changedataonclick = (nextpage) => {
    nextpage === 0 ? setprevpage(true) : setprevpage(false);
    nextpage === slides.length - 1 ? setlastpage(true) : setlastpage(false)
    setpages(nextpage);
  }

  return (
    <div>
      <div className="center">
        <button 
        disabled={currectpage === 0}
        onClick={() => changedataonclick(0)} >Restart</button>
        <button 
        disabled={prevpage}
        onClick={() => changedataonclick(currectpage - 1)}
        >Prev</button>
        <button
          disabled={lastpage}
          onClick={() => changedataonclick(currectpage + 1)}
        >Next</button>
      </div>

      <div className="center">
        <div className='decor' >
          {slides[currectpage].title}
          {slides[currectpage].test}
        </div>
      </div>

    </div>
  )
}
