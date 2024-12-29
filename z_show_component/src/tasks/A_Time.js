import React from 'react'

function Time(){
    let Cdate = new Date(2024,5,6,3);
    Cdate = Cdate.getHours();
    let gretting = "";
    let style = {};

    if(Cdate >= 1 && Cdate < 12){
      gretting="Good morning";
      style.color="blue";
    }
    else if(Cdate >= 12 && Cdate <= 19){
     gretting="Good evening";
     style.color="green";
    }
    else{
     gretting="Good night";
     style.color="gray";
    }
 return (
   <>
     <img src="https://wallpapers.com/images/hd/tropical-orange-beach-sunrise-4g6vo8djjwzon9n1.jpg" className="relative h-screen w-screen p-5 bg-cover " alt=""></img>
     <div className="mt-11 box mx-3 h-48 text-center align-middle absolute ">
       <h1 style={{fontSize:"25px", fontWeight:"bold" ,color:"", padding :"150px"}}> <p> Hello Friend:</p> <span style={style}>{gretting} </span></h1>
     </div>
     </>
 )
}

export default Time;