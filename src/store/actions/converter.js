import * as actionTypes from "./actionTypes";
import axios_exRates from "../../shared/axios_exrates";
import * as constants from "../../const";

const fetchConversionSuccess = (fromCountry, toCountry, amount, result) => {
  return {
    type: actionTypes.FETCH_CONVERSION_SUCCESS,
    fromCountry: fromCountry,
    toCountry: toCountry, 
    amount: amount,
    result: result
  };
};

const fetchConversionFailed = error => {
  return {
    type: actionTypes.FETCH_CONVERSION_FAILED,
    error: error
  };
};
const fetchConversionStart = () => {
  return {
    type: actionTypes.FETCH_CONVERSION_START
  };
};

export const fetchConversionInit = (fromCountry, toCountry, amount) => {
  return dispatch => {
    dispatch(fetchConversionStart());
    axios_exRates
      .get("/latest?base="+fromCountry.currencies[0].code+"&symbols="+toCountry.currencies[0].code)
      .then(response => {
        const result = response.data.rates[toCountry.currencies[0].code];
        console.log("Result: ", result);
        dispatch(fetchConversionSuccess(fromCountry, toCountry, amount, result));
      })
      .catch(error => {
        console.log("Error in getting the data", error);
        dispatch(fetchConversionFailed());
      });
  };
};
