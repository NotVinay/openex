import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import HistoricalRatesForm from "../../components/HistoricalRates/HistoricalRatesForm/HistoricalRatesForm";
import HistoricalRatesResult from "../../components/HistoricalRates/HistoricalRatesResult/HistoricalRatesResult";

class HistoricalRates extends Component {
  componentDidMount() {
    this.props.loadCountries();
  }

  historicalRatesHandler = (from, to, view) => {
    const fromCountry = this.props.countries.filter(
      C => C.alpha2Code === from
    )[0];
    const toCountry = this.props.countries.filter(C => C.alpha2Code === to)[0];
    this.props.fetchHistoricalRates(fromCountry, toCountry, view);
  };

  render() {
    let result = null;
    if (this.props.conversionMultiplier) {
      result = (
        <div>
          {this.props.conversionAmount +
            " " +
            this.props.conversionFrom.currencies[0].code +
            " = "}{" "}
          {(
            this.props.conversionAmount * this.props.conversionMultiplier
          ).toFixed(2)}{" "}
          {" " + this.props.conversionTo.currencies[0].code}
        </div>
      );
    }
    return (
      <Aux>
        <HistoricalRatesForm
          countries={this.props.countries}
          historicalRatesHandler={this.historicalRatesHandler}
        ></HistoricalRatesForm>
        <HistoricalRatesResult />
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
    fetchHistoricalRates: (from, to, view) =>
      dispatch(actions.fetchHistoricalRatesInit(from, to, view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalRates);
