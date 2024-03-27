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
    return  `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridien}`;
  }
  function padzero(number){
    return number<10? `0${number}`:`${number}`;
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
