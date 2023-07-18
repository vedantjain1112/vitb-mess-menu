import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
    const [count,setCount] = useState(0);

    function incrementCount(){
        setCount(count + 1)
    }

    function decrementCount(){
        if(count>0){
            setCount(count - 1)
        }
    }

    function resetCount(){
        if(count > 0){
            setCount(0);
        }
    }
  return (
    <>
        <div class="count">
            <h1>{count}</h1>
        </div>
        <div class="container">
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    </>
  )
}

export default Counter