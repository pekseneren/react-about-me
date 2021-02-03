import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Repo from "./components/Repo";
import PullRequest from "./components/PullRequest";
import * as api from "./apis/GithubApi";
import Loader from "./components/Loader";
import { Grid } from '@material-ui/core';

function App() {

  const [repos, setRepos] = useState([])
  const [pullRequests, setPullRequests] = useState([])
  const [repoLoading, setrepoLoading] = useState(true)
  const [PRLoading, setprLoading] = useState(true)

  useEffect(() => {

    const getRepositories = async () => {

      try{
        const response = await axios.get(api.repositoriesUrl);

        var tmpRepos = response.data.map(r => ({id: r.id, url: r.html_url, name: r.name, description: r.description, fork: r.fork}));
  
        await Promise.all(tmpRepos.map(async (r) => setRepoLanguageStat(r)));
  
        setRepos(tmpRepos);

        setrepoLoading(false)
      } 
      catch(e){
        console.log(e)
      }
    }

    const getPullRequests = async () => {

      try{
        const response = await axios.get(api.pullRequestsUrl);

        var tmpPullRequests = response.data.items.map(pr => ({url: pr.html_url, title: pr.title}));

        setPullRequests(tmpPullRequests);

        setprLoading(false)
      }
      catch(e){
        console.log(e)
      }
    }
    
    getRepositories();

    getPullRequests();
  }, []);

  const setRepoLanguageStat = async (repository) => {

    const response = await axios.get(api.repositoryLanguageStatUrl(repository.name));

    var tmpStats = [];

    Object.keys(response.data).forEach(key => {

      tmpStats.push({
        name: key,
        usage: response.data[key]
      });

    });

    repository.stats = tmpStats;
  }

  return (
    <div className="App">
        <div className="AppContainer py-4">
          {repoLoading && PRLoading ? <Loader />:
            (
              <div>

                <h1 className="py-2">Here's my projects and pull requests to other open source projects</h1>

                <h2 className="py-2">Repositories</h2>

                <div className="mb-4">
                  <Grid container spacing={3}>
                    {repos.filter(r => !r.fork).map(repo => {
                      return <Repo key={repo.id} repo={repo}/>
                    })}
                  </Grid>
                </div>

                <h2 className="py-2">Forked Repositories</h2>

                <div className="mb-4">
                  <Grid container spacing={3}>
                    {repos.filter(r => r.fork).map(repo => {
                      return <Repo key={repo.id} repo={repo}/>
                    })}
                  </Grid>
                </div>

                <h2 className="py-2">Pull Requests</h2>
                
                <div className="mb-4">
                  <ol>
                    {pullRequests.map(pr => {
                      return <PullRequest key={pr.url} pr={pr}/>
                    })}
                  </ol>
                </div>
        
              </div>
            )
          }
        </div>
    </div>
  );
}

export default App;