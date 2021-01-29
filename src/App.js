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
  
      var tmpRepos = response.data.map(r => ({id: r.id, url: r.html_url, name: r.name, description: r.description, fork: r.fork}));

      await Promise.all(tmpRepos.map(async (r) => setRepoLagnuageStat(r)));

      setRepos(tmpRepos);

      console.log(tmpRepos);
    }

    getRepositories();
  }, []);

  const setRepoLagnuageStat = async (r) => {

    const response = await axios.get("https://api.github.com/repos/pekseneren/" + r.name + "/languages");

    var tmpStats = [];

    for(var i = 0; i < Object.keys(response.data).length; i++)
    {
      tmpStats.push({name: Object.keys(response.data)[i], usage: response.data[Object.keys(response.data)[i]]});
    }

    r.stats = tmpStats;
  }

  return (
    <div className="App">
        <div className="repositoryContainer">
          <div>
            <h4>My Repositories</h4>
            {repos.filter(r => !r.fork).map(repo => {
              return <Repo repo={repo}/>
            })}
          </div>
          <div>
            <h4>My Forked* Repositories</h4>
            {repos.filter(r => r.fork).map(repo => {
              return <Repo repo={repo}/>
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
