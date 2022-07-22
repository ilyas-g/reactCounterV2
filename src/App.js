import { useState } from 'react';
import './App.css';

function App() {

  const [tabCounter, setTabCounter] = useState([]);

  const divCounter = (
    <div>
      <div>
        <button>-</button>
        <p>2</p>
        <button>+</button>
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
  const addBtn = (<button onClick={test}>Add counter</button>);

  return (
    <div className="App">
      <header>
        <h1>React Counter v2</h1>
      </header>
      <div>
        {tabCounter.length < 3 ? addBtn : ''}

        {tabCounter.map((user, index) => {
          return <h1 key={index}>{user}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
