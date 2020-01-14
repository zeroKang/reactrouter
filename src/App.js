import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
            <li>
              <Link to="/page3">Page3</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/todo">
            <TodoPage></TodoPage>
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
