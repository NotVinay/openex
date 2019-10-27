import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import Typography from "@material-ui/core/Typography";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const converterResult = props => {
  let result = null;
  if (props.loading) {
    result = <Spinner></Spinner>;
  } else if (props.error) {
    result = (
      <SnackbarContent
        variant="error"
        message="Error in conversion."
        action={action}
      />
    );
  } else if (conversionMultiplier && conversionAmount) {
    result = (
      <Typography variant="h2" gutterBottom>
        {props.conversionAmount +
          " " +
          props.conversionFrom.currencies[0].code +
          " = "}{" "}
        {(props.conversionAmount * props.conversionMultiplier).toFixed(2)}{" "}
        {" " + props.conversionTo.currencies[0].code}
      </Typography>
    );
  }
  return { result };
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

export default connect(mapStateToProps)(converterResult);
