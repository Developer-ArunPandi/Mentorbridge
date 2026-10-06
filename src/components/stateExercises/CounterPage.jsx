import React from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const handleCountIncreament = () => {
    setCount((preVal) => preVal + 1);
  };
  const handleCountDecreament = () => {
    setCount((preVal) => preVal - 1);
  };
  const handleCountReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCountIncreament}>Increament</button>
      <button onClick={handleCountDecreament}>Decreament</button>
      <button onClick={handleCountReset}>Reset Count</button>
    </>
  );
};

export default CounterPage;
