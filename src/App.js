import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExchangeRate from "./containers/ExchangeRate/ExchangeRate";

import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.App}>
          <Layout>
            <Route path="/" component={ExchangeRate} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;