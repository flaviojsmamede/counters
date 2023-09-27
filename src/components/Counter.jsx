import  { useState } from "react";

const Counter = ({ initial, step = 1}) => {
  const [count, setCount] = useState(initial);

  const handleMinus = () => {
    const newCount = count - step;

    setCount(Math.max(newCount, 0));
  }

  const handlePlus = () => {
    setCount(count + step);
  }

  return (
    <div className="m-3">
      <button onClick={handleMinus} className="btn btn-outline-primary">-</button>
      <span className="p-4 text-primary">{count}</span>
      <button onClick={handlePlus} className="btn btn-outline-primary">+</button>
    </div>
  );
};

export default Counter;
