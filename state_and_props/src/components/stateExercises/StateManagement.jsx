import React, { useState } from 'react'

const StateManagement = () => {
    const [userName,setUserName]=useState("");
    const [userAge,setUserAge]=useState("");
    const [isMutant,setIsMutant]=useState(true);
    const [friends,setFriends]=useState(["Tony","Steve"]);
    const [newFriend,setNewFriend]=useState("");
    const [userBackground,setUserBackground]=useState({universe:"",Costume_color:""})


   const handleAddNewFriends=()=>{
    setFriends([...friends,newFriend]);
    setNewFriend("")
    }
  const handleRemoveFriends=(removeIndex)=> {
        setFriends(friends.filter((_,index)=> index!==removeIndex ) )
  }
  const handleBackgroundChange=(e)=>{
    const {name,value}=e.target;
    setUserBackground({...userBackground,[name]:value})
  }

  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <label>Name: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Age: </label>
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>
     
     
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={isMutant}
            onChange={(e) => setIsMutant(e.target.checked)}
          />
          Mutant
        </label>
      </div>


      <div style={{ marginBottom: '15px' }}>
        <label>Add Friends: </label>
        <input
          type="text"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          placeholder="New Friends"
        />
        <button onClick={handleAddNewFriends}>Add</button>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              {friend}{' '}
              <button onClick={() => handleRemoveFriends(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>


       <div style={{ marginBottom: '15px' }}>
        <h3>User Profile (Object):</h3>
        <div>
          <label>Universe: </label>
          <input
            type="text"
            name="universe"
            value={userBackground.universe}
            onChange={ handleBackgroundChange}
          />
        </div> 

         <div style={{ marginTop: '5px' }}>
          <label>Costume color: </label>
          <input
            type="text"
            name="Costume_color"
            value={userBackground.Costume_color}
            onChange={ handleBackgroundChange}
          />
          {userBackground.name}
        </div>
      </div> 

       <h3>Background Details</h3>

       <ul>
          {Object.entries(userBackground).map(([name,value])=>(
            <li key={name} >{`${name} : ${value} `}</li>
          ))}
       </ul>
     
    </>
  )
}

export default StateManagement;
