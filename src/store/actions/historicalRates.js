import * as actionTypes from "./actionTypes";
import axios_exRates from "../../shared/axios_exrates";
import * as constants from "../../const";

const fetchHistoricalRatesSuccess = (
  fromCountry,
  toCountry,
  startDate,
  endDate,
  result
) => {
  return {
    type: actionTypes.FETCH_HISTORICAL_RATES_SUCCESS,
    fromCountry: fromCountry,
    toCountry: toCountry,
    startDate: startDate,
    endDate: endDate,
    result: result
  };
};

const fetchHistoricalRatesFailed = error => {
  return {
    type: actionTypes.FETCH_HISTORICAL_RATES_FAILED,
    error: error
  };
};
const fetchHistoricalRatesStart = () => {
  return {
    type: actionTypes.FETCH_HISTORICAL_RATES_START
  };
};

export const fetchHistoricalRatesInit = (fromCountry, toCountry, view) => {
  return dispatch => {
    dispatch(fetchHistoricalRatesStart());
    var endDate = new Date().toLocaleDateString("en-CA");
    var startDate = null;
    var today = new Date();
    if (view === "M") {
      startDate = new Date(today.setMonth(today.getMonth() - 1));
    } else if (view === "Y") {
      startDate = new Date(today.setFullYear(today.getFullYear() - 1));
    } else if (view === "5Y") {
      startDate = new Date(today.setFullYear(today.getFullYear() - 5));
    } else {
      startDate = new Date(today.setDate(today.getDate() - 7));
    }
    axios_exRates
      .get(
        "/history?base=" +
          fromCountry.currencies[0].code +
          "&symbols=" +
          toCountry.currencies[0].code +
          "&start_at=" +
          startDate.toLocaleDateString("en-CA") +
          "&end_at=" +
          endDate
      )
      .then(response => {
        const result = response.data.rates;
        console.log("Result: ", result);
        dispatch(
          fetchHistoricalRatesSuccess(
            fromCountry,
            toCountry,
            startDate,
            endDate,
            result
          )
        );
      })
      .catch(error => {
        console.log("Error in getting the data", error);
        dispatch(fetchHistoricalRatesFailed());
      });
  };
};
