import  { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const Counter = ({ id, initial, step = 1, onDelete}) => {
  const [count, setCount] = useState(initial);

  const handleMinus = () => {
    const newCount = count - step;

    setCount(Math.max(newCount, 0));
  }

  const handlePlus = () => {
    setCount(count + step);
  }

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div>
      <button onClick={handleMinus} className="btn btn-outline-primary">-</button>
      <span className="ps-3 pe-3 text-primary">{count}</span>
      <button onClick={handlePlus} className="btn btn-outline-primary">+</button>
      <button onClick={handleDelete} className='btn text-danger opacity-75 border-0'><FontAwesomeIcon icon={faTrashCan} /></button>
    </div>
  );
};

export default Counter;
