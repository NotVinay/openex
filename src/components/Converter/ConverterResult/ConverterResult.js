import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import Typography from "@material-ui/core/Typography";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { connect } from "react-redux";
import Aux from "../../../hoc/Aux/Aux";

const converterResult = props => {
  let result = <div></div>;
  if (props.loading) {
    result = <Spinner></Spinner>;
  } else if (props.error) {
    return <SnackbarContent variant="error" message="Error in conversion." />;
  } else if (props.conversionMultiplier && (props.conversionAmount !== null)) {
    return (
      <Aux>
        <Typography variant="h2" gutterBottom>
          {props.conversionAmount +
            " " +
            props.conversionFrom.currencies[0].code +
            " = "}{" "}
          {(props.conversionAmount * props.conversionMultiplier).toFixed(2)}{" "}
          {" " + props.conversionTo.currencies[0].code}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {"1 " +
            props.conversionFrom.currencies[0].code +
            " = " +
            props.conversionMultiplier}
          {" " + props.conversionTo.currencies[0].code}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          All figures are live mid-market rates as published by European Central
          Bank.
        </Typography>
      </Aux>
    );
  }
  return result;
};

const mapStateToProps = state => {
  return {
    conversionFrom: state.converter.fromCountry,
    conversionTo: state.converter.toCountry,
    conversionAmount: state.converter.amount,
    conversionMultiplier: state.converter.result,
    loading: state.converter.loading,
    error: state.converter.error
  };
};

export default connect(
  mapStateToProps,
  null
)(converterResult);
