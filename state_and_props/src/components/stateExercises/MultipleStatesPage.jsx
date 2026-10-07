import React from "react";

const MultipleStatesPage = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userCity, setUserCity] = useState("");
  const handleResetUserInputs = () => {
    setUserName("");
    setUserAge("");
    setUserEmail("");
    setUserCity("");
  };
  return (
    <>
      <label htmlFor="userName">User Name</label>
      <input
        type="text"
        id="userName"
        placeholder="Enter your name..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="userAge">User Age</label>
      <input
        type="number"
        id="userAge"
        placeholder="Enter your age..."
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="userEmail">User Email</label>
      <input
        type="email"
        id="userEmail"
        placeholder="Enter your email..."
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="userCity">User City</label>
      <input
        type="text"
        id="userCity"
        placeholder="Enter your city..."
        value={userCity}
        onChange={(e) => setUserCity(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleResetUserInputs}>Reset</button>

      <br />
      <br />
      <br />
      {userName && ` Hi ${userName}.`}
      {userAge && ` your age is ${userAge}.`}
      {userEmail && ` your Email is ${userEmail}.`}
      {userCity && ` you from ${userCity}.`}
    </>
  );
};

export default MultipleStatesPage;
