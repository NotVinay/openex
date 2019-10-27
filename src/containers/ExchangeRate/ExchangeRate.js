import React, { Component } from "react";

import classes from "./ExchangeRate.module.css";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import ConverterForm from "../../components/Converter/ConverterForm/ConverterForm";
import { throwStatement } from "@babel/types";

class ExchangeRate extends Component {
  componentDidMount() {
    this.props.loadCountries();
  }

  conversionHandler = (from, to, amount) => {
    const fromCountry = this.props.countries.filter(
      C => C.alpha2Code == from
    )[0];
    const toCountry = this.props.countries.filter(C => C.alpha2Code == to)[0];
    console.log(fromCountry, toCountry);
    this.props.convert(fromCountry, toCountry, amount);
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
          {(this.props.conversionAmount * this.props.conversionMultiplier).toFixed(2)}{" "}
          {" " + this.props.conversionTo.currencies[0].code}
        </div>
      );
    }
    return (
      <React.Fragment>
        <ConverterForm
          countries={this.props.countries}
          conversionHandler={this.conversionHandler}
        ></ConverterForm>
        {result}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    countriesLoading: state.countries.loading,
    conversionFrom: state.converter.fromCountry,
    conversionTo: state.converter.toCountry,
    conversionAmount: state.converter.amount,
    conversionMultiplier: state.converter.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCountries: () => dispatch(actions.fetchCountriesInit()),
    convert: (from, to, amount) => dispatch(actions.fetchConversionInit(from, to, amount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRate);
