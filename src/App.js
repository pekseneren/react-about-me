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

function App() {

  return (
    <Router>
        <header>
          <nav>
            <div className="nav-div py-2">
              <Link className="mr-5" to="/">me</Link>
              <Link to="/projects">projects</Link>
            </div>
          </nav>
        </header>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
        </Switch>

        <footer>
          <div>
            <a href="https://github.com/pekseneren/reactjs-about-me" target="blank">This project</a>
            <span> developed with ❤️ & ReactJS.</span>
          </div>
          <div>
            <span>Also checkout</span>
            <a href="https://docs.github.com/en/rest" target="blank"> Github API</a>
          </div>
        </footer>
    </Router>
  );
}

export default App;