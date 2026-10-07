import React, { useState } from "react";
import DisplayGreeting from "./DisplayGreeting.jsx"
const LiveGreeting = () => {
  const [userName, setUserName] = useState("");
  const handleUserName=(e)=>{
    setUserName(e.target.value)
  }
   const handleClearUserName=()=>{
     setUserName("")
  }
  return (
    <>
      <div class="input-group">
        <span class="input-group-text" id="visible-addon">
          Name
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="visible-addon"
          value={userName}
          onChange={handleUserName}
        />   
      </div>
      <button type="button" class="btn btn-primary" onClick={handleClearUserName}>Clear Name</button> 
      <br />
        <DisplayGreeting name={userName}/>
    </>
  );
};

export default LiveGreeting;
