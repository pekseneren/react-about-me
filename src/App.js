import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Repo from "./components/Repo";
import PullRequest from "./components/PullRequest";
import * as api from "./apis/GithubApi";

function App() {
  
  const [repos, setRepos] = useState([])
  const [pullRequests, setPullRequests] = useState([])

  useEffect(() => {

    const getRepositories = async () => {
      const response = await axios.get(api.repositoriesUrl);
  
      var tmpRepos = response.data.map(r => ({id: r.id, url: r.html_url, name: r.name, description: r.description, fork: r.fork}));

      await Promise.all(tmpRepos.map(async (r) => setRepoLagnuageStat(r)));

      setRepos(tmpRepos);
    }

    const getPullRequests = async () => {
      
      const response = await axios.get(api.pullRequestsUrl);

      var tmpPullRequests = response.data.items.map(pr => ({url: pr.html_url, title: pr.title}));

      setPullRequests(tmpPullRequests);
    }

    getRepositories();

    getPullRequests();
  }, []);

  const setRepoLagnuageStat = async (r) => {

    const response = await axios.get(api.repositoryLanguageStatUrl(r.name));

    var tmpStats = [];

    for(var i = 0; i < Object.keys(response.data).length; i++)
    {
      tmpStats.push({name: Object.keys(response.data)[i], usage: response.data[Object.keys(response.data)[i]]});
    }

    r.stats = tmpStats;
  }

  return (
    <div className="App">
        <div className="AppContainer">
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
