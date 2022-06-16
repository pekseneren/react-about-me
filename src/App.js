import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/base_components/Home'
import Projects from './components/base_components/Projects'
import { Container } from '@material-ui/core';

function App() {

  return (
    <Router>
        <header>
          <nav>
            <div className="nav-div py-2">
              <Link className="mr-5" to="/react-about-me">me</Link>
              <Link to="/react-about-me/projects">projects</Link>
            </div>
          </nav>
        </header>

        <Switch>
            <Route path="/react-about-me" exact component={Home} />
            <Route path="/react-about-me/projects" component={Projects} />
        </Switch>

        <footer>
          <Container className="py-2">
            <p><a href="https://github.com/pekseneren/reactjs-about-me" target="blank">This project</a> developed with ❤️ & ReactJS.</p>
            <p>Also checkout <a href="https://docs.github.com/en/rest" target="blank">Github API</a></p>
          </Container>
        </footer>
    </Router>
  );
}

export default App;