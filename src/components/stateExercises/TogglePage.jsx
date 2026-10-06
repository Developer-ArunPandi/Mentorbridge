import React from "react";

const TogglePage = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((preVal) => !preVal);
  };
  return (
    <>
      <button onClick={handleToggle}>{isToggle ? "OFF" : "ON"}</button>
      {isToggle && <h1>hi</h1>}
    </>
  );
};

export default TogglePage;
