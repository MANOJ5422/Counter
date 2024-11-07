// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

function App() {
 
     // State to keep track of the count
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div >
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;