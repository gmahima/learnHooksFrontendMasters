import React, { useState, useEffect } from 'react';
import {render} from 'react-dom'

import './styles.scss';


const Counter = ({max, step}) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `counter: ${count}`
    console.log(count)
  },[count])
  const increment = () => {
      setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(p => {
    //   if (p>=max){
    //     return p
    //   }
    //   else {
    //     return p+ step
    //   }
    // });
    // setCount(p => p+1); //will compute the value & pass but update state only oncce
    // setCount(p => p+1);
    // console.log(count);
  }
  const decrement = () => {
    setCount(count-step);
    // setCount(count+1);
    // setCount(count+1);
    console.log(count);
  }
  const reset = () => {
    setCount(0);
    console.log(count);
  }
  return (
    <main className="Counter">
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
