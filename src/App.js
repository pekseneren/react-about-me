import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/base_components/Home'
import GitHubSummary from './components/base_components/GitHubSummary'
import { Container } from '@material-ui/core';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <header>
            <nav>
              <div className="nav-div py-2">
                <Link className="mr-5" to="/react-about-me">Home</Link>
                <Link to="/react-about-me/github-summary">Github Summary</Link>
                <div className="switch">
                  <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                </div>
              </div>
            </nav>
          </header>

          <Switch>
            <Route path="/react-about-me" exact component={Home} />
            <Route path="/react-about-me/github-summary" component={GitHubSummary} />
          </Switch>

          <footer>
            <Container className="py-2">
              <p><a href="https://github.com/pekseneren/reactjs-about-me" target="blank">This project</a> developed with ❤️</p>
            </Container>
            <div>
              <label></label>
            </div>
          </footer>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;