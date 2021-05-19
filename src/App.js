import React, { useState } from 'react';
import './App.css';

function App() {
 const [count, setNumber] = useState(0);

 const increase = () => {
   setNumber(count + 1);
 }

 const decrease = () => {
  setNumber(count - 1);
}

const reset = () => {
  setNumber(0);
}





  return (
    <div className="App dib center pa7 ph5-ns vh-100 dt w-100">
      <div className="f1 v-mid tc white ph4-l">
        <h1>{count}</h1>
      </div>
      <div className="pointer pa3 tc">
        <button className="br2 f1 grow shadow-5" onClick={decrease}>Decrease</button>
        <button className="br2 f1 grow shadow-5" onClick={increase}>Increase</button>
        <button className="br2 f1 grow shadow-5" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
