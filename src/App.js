import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/base_components/Home'
import GitHubSummary from './components/base_components/GitHubSummary'
import { Container } from '@material-ui/core';

function App() {

  return (
    <Router>
        <header>
          <nav>
            <div className="nav-div py-2">
              <Link className="mr-5" to="/react-about-me">home</Link>
              <Link to="/react-about-me/github-summary">github summary</Link>
            </div>
          </nav>
        </header>

        <Switch>
            <Route path="/react-about-me" exact component={Home} />
            <Route path="/react-about-me/github-summary" component={GitHubSummary} />
        </Switch>

        <footer>
          <Container className="py-2">
          </Container>
        </footer>
    </Router>
  );
}

export default App;