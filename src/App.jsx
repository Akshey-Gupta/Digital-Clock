import React, { useEffect, useState } from 'react'

const App = () => {

  const[time,setTime]=useState(new Date());

  useEffect(()=>{
    let interId=setInterval(()=>{
      setTime(new Date());
    },1000);

    return ()=>{
      clearInterval(interId);
    }
  },[]);

  function formatTime(){
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    const meridien=hours>=12?"PM":"AM";
    hours=hours%12 ||12;
    return  `${hours}:${minutes}:${seconds} ${meridien}`;
  }

  return (
    <div className='Container'>
      <div className="clock">
        <span>{formatTime()}</span>
        </div>      
    </div>
  )
}

export default App
