import { useState } from 'react';
import './App.css';

function App() {

  const [tabCounter, setTabCounter] = useState([0]);

  const test = () => {
    const newTabCounter = [...tabCounter];
    newTabCounter.push(0);
    setTabCounter(newTabCounter);
    console.log(setTabCounter);
  };

  return (
    <div className="App">
      <header>
        <h1>React Counter v2</h1>
      </header>
      {tabCounter.length < 3 ?
        <button
          className='mb-25'
          onClick={test}
        >
          Add counter
        </button> : ''}

      {tabCounter.map((counter, index) => {
        return <div className='divCounter w-100'>
          <div className='d-flex mb-15'>
            <button onClick={() => {
              console.log('cest moins');
            }}>-</button>
            <p>{counter}</p>
            <button onClick={() => {
              console.log('cest moins');
            }}>+</button>
          </div>
          <button>Reset</button>
        </div >;
      })}

    </div >
  );
}

export default App;
