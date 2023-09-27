import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';
import { useState } from "react";


const App = () => {
  const [counters, setCounters] = useState([
    {id: 1, initial: 0, step: 1},
    {id: 2, initial: 0, step: 1},
    {id: 3, initial: 0, step: 1}
  ]);

  const handleAddCounter = () => {

  }

  const handleRemoveCounter = () => {

  }



  return (
  <div className="container m-5">
    <button onClick="handleAddCounter" className='btn btn-primary'>Add counter</button>
    {counters.map(({ id, ...props }) => {
      return(
      <div key={id}>
        <Counter {...props} />
        <button onClick="handleRemoveCounter" className='btn btn-outline-danger'>Remove counter <i class="fa-solid fa-trash-can"></i></button>
      </div>
      );
    })}
  </div>
  );
};

export default App;
