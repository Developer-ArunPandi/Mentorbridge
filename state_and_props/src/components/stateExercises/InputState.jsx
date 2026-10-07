import React from "react";

const InputState = () => {
  const [userInput, setUserInput] = useState("");
  const handleClearUserInput = () => {
    setUserInput("");
    return (
      <>
        <input
          type="text"
          placeholder="Enter something..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleClearUserInput}>Clear</button>
        <br /> <br />
        {userInput}
      </>
    );
  };
};
export default InputState;
