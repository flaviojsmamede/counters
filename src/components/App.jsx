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
    const newCounter = { id: new Date().getTime(), initial: 0 }
    setCounters([newCounter, ...counters])
  }

  const handleDeleteCounter = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  }



  return (
  <div className="container m-5">
    <button onClick={handleAddCounter} className='btn btn-primary'>Add Counter</button>
    {counters.map(({ id, ...props }) => {
      return(
      <div key={id} className='d-flex mt-4'>
        <Counter id={id} {...props} onDelete={handleDeleteCounter} />
      </div>
      );
    })}
  </div>
  );
};

export default App;
