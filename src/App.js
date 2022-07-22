import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Counter v2</h1>
      </header>
      <div>
        <button>Add counter</button>
        <div>
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </div>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
