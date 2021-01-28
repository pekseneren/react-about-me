/* eslint-disable no-unused-expressions */
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Repo from "./components/Repo";

function App() {
  
  const [repos, setRepos] = useState([])

  useEffect(() => {

    const getRepositories = async () => {
      const response = await axios.get("https://api.github.com/users/pekseneren/repos");
  
      var tmpRepos = response.data.map(r => ({key: r.node_id, url: r.html_url, name: r.name, description: r.description}));

      setRepos(tmpRepos);
    }

    getRepositories();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            {repos.map(repo => {
              return <Repo repo={repo}/>
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
