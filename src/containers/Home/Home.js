import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import classes from "./Home.module.css";
import Grid from "@material-ui/core/Grid";

class Home extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.HeroContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              Left
            </Grid>
            <Grid item xs={12} md={6}>
              Right
            </Grid>
          </Grid>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    countriesLoading: state.countries.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCountries: () => dispatch(actions.fetchCountriesInit()),
    convert: (from, to, amount) =>
      dispatch(actions.fetchConversionInit(from, to, amount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
