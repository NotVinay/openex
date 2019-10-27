import React, { Component } from "react";

import classes from "./ExchangeRate.module.css";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import ConverterForm from "../../components/Converter/ConverterForm/ConverterForm";

class ExchangeRate extends Component {

  componentDidMount() {
    this.props.loadCountries();
  }


  render() {
    return (
      <ConverterForm countries={this.props.countries}></ConverterForm>
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
    loadCountries: () => dispatch(actions.fetchCountriesInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRate);
