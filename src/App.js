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
          <h1>Here's my projects and pull requests to other open source projects</h1>
          <h2>Repositories</h2>
          <ol>
            {repos.filter(r => !r.fork).map(repo => {
              return <Repo key={repo.id} repo={repo}/>
            })}
          </ol>
          <h2>Forked Repositories</h2>
          <ol>
            {repos.filter(r => r.fork).map(repo => {
              return <Repo key={repo.id} repo={repo}/>
            })}
          </ol>
          <h2>Pull Requests</h2>
          <ol>
            {pullRequests.map(pr => {
              return <PullRequest key={pr.url} pr={pr}/>
            })}
          </ol>
        </div>
    </div>
  );
}

export default App;
