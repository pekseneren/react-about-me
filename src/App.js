import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Repo from "./components/Repo";
import PullRequest from "./components/PullRequest";

function App() {
  
  const [repos, setRepos] = useState([])
  const [pullRequests, setPullRequests] = useState([])

  useEffect(() => {

    const getRepositories = async () => {
      const response = await axios.get("https://api.github.com/users/pekseneren/repos");
  
      var tmpRepos = response.data.map(r => ({id: r.id, url: r.html_url, name: r.name, description: r.description, fork: r.fork}));

      await Promise.all(tmpRepos.map(async (r) => setRepoLagnuageStat(r)));

      setRepos(tmpRepos);
    }

    const getPullRequests = async () => {
      
      const response = await axios.get("https://api.github.com/search/issues?q=author%3Apekseneren+type%3Apr");

      var tmpPullRequests = response.data.items.map(pr => ({url: pr.html_url, title: pr.title}));

      setPullRequests(tmpPullRequests);
    }

    getRepositories();

    getPullRequests();
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
            <h1>Here's my projects and pull requests to other open source projects</h1>
          </div>
          <div>
            <h4>Repositories</h4>
            {repos.filter(r => !r.fork).map(repo => {
              return <Repo key={repo.id} repo={repo}/>
            })}
          </div>
          <div>
            <h4>Forked Repositories</h4>
            {repos.filter(r => r.fork).map(repo => {
              return <Repo key={repo.id} repo={repo}/>
            })}
          </div>
          <div>
            <h4>Pull Requests</h4>
            {pullRequests.map(pr => {
              return <PullRequest key={pr.url} pr={pr}/>
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
