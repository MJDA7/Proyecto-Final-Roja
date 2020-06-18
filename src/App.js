import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import Home from './Views/Home/Home';
import MundialView from './Views/MundialView/MundialView';
import View404 from './Views/View404/View404'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <MundialView/>
          </Route>
          <Route path="*">
            <View404 />
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
