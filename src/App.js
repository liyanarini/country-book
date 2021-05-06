import './App.css';
import React from "react";
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';


function App() {
     return (
      <div>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/details/:countryName">
              <CountryDetails></CountryDetails>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
