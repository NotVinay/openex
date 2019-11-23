import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../../shared/Utility";

const initialState = {
  fromCountry: null,
  toCountry: null,
  result: null,
  loading: false,
  error: false
};

const fetchHistoricalRateStart = (state, action) => {
  return utilities.updateObject(state, {
    loading: true
  });
};

const fetchHistoricalRateSuccess = (state, action) => {
  return utilities.updateObject(state, {
    fromCountry: action.fromCountry,
    toCountry: action.toCountry,
    result: action.result,
    loading: false,
    error: false
  });
};

const fetchHistoricalRateFailed = (state, action) => {
  return utilities.updateObject(state, {
    fromCountry: null,
    toCountry: null,
    result: null,
    loading: false,
    error: true
  });
};
const reducer = (state = initialState, action) => {
  console.log("In reducer fired", action);
  switch (action.type) {
    case actionTypes.FETCH_HISTORICAL_RATES_START:
      return fetchHistoricalRateStart(state, action);
    case actionTypes.FETCH_HISTORICAL_RATES_SUCCESS:
      return fetchHistoricalRateSuccess(state, action);
    case actionTypes.FETCH_HISTORICAL_RATES_FAILED:
      return fetchHistoricalRateFailed(state, action);
    default:
      break;
  }
  return state;
};

export default reducer;
