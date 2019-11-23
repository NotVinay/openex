import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExchangeRate from "./containers/ExchangeRate/ExchangeRate";
import classes from "./App.module.css";
import Home from "./containers/Home/Home";
import HistoricalRates from "./containers/HistoricalRates/HistoricalRates";

class App extends Component {
  render() {
    return (
      <Router basename="/openex">
        <div className={classes.App}>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/converter" component={ExchangeRate} />
            <Route path="/historical-rates" component={HistoricalRates} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
