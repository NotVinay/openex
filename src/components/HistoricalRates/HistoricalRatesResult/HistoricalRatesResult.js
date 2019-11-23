import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import Grid from "@material-ui/core/Grid";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { connect } from "react-redux";
import Aux from "../../../hoc/Aux/Aux";
import { Line } from "react-chartjs-2";
import * as styles from "./HistoricalRatesResult.module.css";

const converterResult = props => {
  let result = <div></div>;
  if (props.loading) {
    result = <Spinner></Spinner>;
  } else if (props.error) {
    return (
      <SnackbarContent
        variant="error"
        message="Error in fetching historical rates."
      />
    );
  } else if (props.historicalRates) {
    var keys = Object.keys(props.historicalRates);
    var fromCode = props.historicalRatesTo.currencies[0].code;
    var toCode = props.historicalRatesFrom.currencies[0].code;
    var values = keys.map(key => {
      return props.historicalRates[key][fromCode];
    });

    const data = {
      labels: keys,
      datasets: [
        {
          label: "1 " + fromCode + " to " + toCode,
          responsive: true,
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values
        }
      ]
    };

    return (
      <Grid container alignItems="center">
        <Grid item xs={10} sm={10} md={8} lg={6} className={styles.MAuto}>
          <Line data={data} justify={"center"} />
        </Grid>
      </Grid>
    );
  }
  return result;
};

const mapStateToProps = state => {
  return {
    historicalRatesFrom: state.historicalRates.fromCountry,
    historicalRatesTo: state.historicalRates.toCountry,
    historicalRates: state.historicalRates.result,
    loading: state.converter.loading,
    error: state.converter.error
  };
};

export default connect(mapStateToProps, null)(converterResult);
