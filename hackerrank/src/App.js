import React, { useState } from 'react'
import Article from './Components/Article'
export default function App({articles}) {
  const alldata = articles;

  const [data , setdata] = useState(alldata);

  const upvoted = () => {
    const filter = [...data].sort((a,b) => a.vote - b.vote)
    setdata(filter);
  }
  
  // const datest = () => {
  //   const update = [...data].sort((a,b) => (a.data) - (b.data))
  //   setdata(update);
  // }

    
  const datest = () => {
    const sortedData = [...data].sort((a, b) => a.date - b.date);
    setdata(sortedData);
  };
  
  return (
    <>
    <div>
        <button>Name</button>
        <button onClick={upvoted} >Most upvoted</button>
        <button onClick={datest} >resentdata</button>
    </div>
    <Article articles={data} />
    </>
  )
}
