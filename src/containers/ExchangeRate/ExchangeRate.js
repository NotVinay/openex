import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import ConverterForm from "../../components/Converter/ConverterForm/ConverterForm";
import ConverterResult from "../../components/Converter/ConverterResult/ConverterResult";

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
        <Aux>
          <ConverterForm countries={this.props.countries} conversionHandler={this.conversionHandler}></ConverterForm>
          <ConverterResult/>
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
    convert: (from, to, amount) => dispatch(actions.fetchConversionInit(from, to, amount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRate);
