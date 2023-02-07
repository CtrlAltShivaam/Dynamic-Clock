import React, { useState } from "react";




function App() {
  const now = new Date().toLocaleTimeString('it-IT');
  const [time,setTime] = useState(now);
  function updateTime(){
    const newTime = new Date().toLocaleTimeString('it-IT');
    setTime(newTime);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1 className="clock">{time}</h1>
    </div>
  );
}

export default App;
