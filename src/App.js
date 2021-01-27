import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';

function App() {
  
  const getRepositories = async () => {

    const response = await axios.get("https://api.github.com/users/pekseneren/repos");

    console.log(response);
  }

  getRepositories();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
