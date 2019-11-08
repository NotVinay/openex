import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../../shared/Utility";

const initialState = {
  fromCountry: null,
  toCountry: null,
  amount: null,
  result: null,
  loading: false,
  error: false
};

const fetchConversionStart = (state, action) => {
  return utilities.updateObject(state, {
    loading: true
  });
};

const fetchConversionSuccess = (state, action) => {
  return utilities.updateObject(state, {
    fromCountry: action.fromCountry,
    toCountry: action.toCountry,
    amount: action.amount,
    result: action.result,
    loading: false,
    error: false
  });
};

const fetchConversionFailed = (state, action) => {
  return utilities.updateObject(state, {
    fromCountry: null,
    toCountry: null,
    amount: null,
    result: null,
    loading: false,
    error: true
  });
};
const reducer = (state = initialState, action) => {
  console.log("In reducer fired", action);
  switch (action.type) {
    case actionTypes.FETCH_CONVERSION_START:
      return fetchConversionStart(state, action);
    case actionTypes.FETCH_CONVERSION_SUCCESS:
      return fetchConversionSuccess(state, action);
    case actionTypes.FETCH_CONVERSION_FAILED:
      return fetchConversionFailed(state, action);
    default:
      break;
  }
  return state;
};

export default reducer;
