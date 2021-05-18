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
    <div className="App dib mw5 mw7-ns center pa3 ph5-ns vh-100 dt w-100">
      <div className="f1 v-mid tc white ph4-l">
        <h1>{count}</h1>
      </div>
      <div className="pointer pa3 ma2 f6 f2-m f-subheadline-l fw6 tc">
        <button className="br2 f1 grow" onClick={decrease}>Decrease</button>
        <button className="br2 f1 grow" onClick={increase}>Increase</button>
        <button className="br2 f1 grow" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
