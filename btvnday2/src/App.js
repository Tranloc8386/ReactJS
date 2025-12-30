import React, { useState } from 'react'
import Display from './Display';

const App = () => {
  const [count, setCount]=useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count+1)}>Tang</button>
      <button onClick={()=> setCount(count-1)}>Giam</button>
      <Display count={count}   />

    </div>
  )
}

export default App
