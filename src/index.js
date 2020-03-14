import React, { useState, useEffect, useRef } from 'react';
import {render} from 'react-dom'

import './styles.scss';


const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return (JSON.parse(storage)['value']) 
    }
    return initialState;
  };

   const [value, setValue] = useState(get());

   useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
    const id = setInterval(() => {
      console.log(value)
    }, 3000)
    return () => clearInterval(id)
  }, [value]);

   return [value, setValue]
}

const Counter = ({max, step}) => {
  const [count, setCount] = useLocalStorage(0, 'c');
  const countRef = useRef();
  console.log("countRef before: ", countRef)

  let message = ''
  if(countRef.current < count) {
    message = "higher"
  }
  else{
    message = "lower"
  }

  countRef.current = count;
  console.log("countRef after: ", countRef)

  const increment = () => {
      setCount(count+step);
  }
  const decrement = () => {
    setCount(count-step);
    // setCount(count+1);
    // setCount(count+1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <main className="Counter">
      <p>{message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
  
}

render(<Counter max={6} step = {0.5} />, document.getElementById('root'));
