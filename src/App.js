import { useState } from 'react';
import './App.css';

function App() {

  const [tabCounter, setTabCounter] = useState([]);

  const divCounter = (
    <div className='divCounter w-100'>
      <div className='d-flex mb-15'>
        <button onClick={() => {
          console.log('cest moins');
        }}>-</button>
        <p>2</p>
        <button onClick={() => {
          console.log('cest moins');
        }}>+</button>
      </div>
      <button>Reset</button>
    </div >
  );

  const test = () => {
    const newTabCounter = [...tabCounter];
    newTabCounter.push(divCounter);
    setTabCounter(newTabCounter);
    // setUsers(["Tom", "Gwendoline", "Alexis"]);
    console.log(setTabCounter);
  };
  const addBtn = (
    <button
      className='mb-25'
      onClick={test}
    >
      Add counter
    </button>
  );


  return (
    <div className="App">
      <header>
        <h1>React Counter v2</h1>
      </header>
      {tabCounter.length < 3 ? addBtn : ''}

      {tabCounter.map((user, index) => {
        return <div className='mb-50' key={index}>{user}</div>;
      })}

    </div >
  );
}

export default App;
