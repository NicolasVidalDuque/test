import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [s, sets] = useState([]);
  async function press(){
    fetch('https://test-udpj.onrender.com/info',{
      credentials: 'include'
    }).then(r => {
      r.json().then(a => {
        sets(a)
      })
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      <button onClick={press}>Hello</button>
      {s.map((e, index) => (
        <p key={index}>{e}</p>
      ))} 
      </header>
    </div>
  );
}

export default App;
