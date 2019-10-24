import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../../shared/Utility";

const initialState = {
  countries: [],
  loading: false,
  error: false
};

const fetchCountriesStart = (state, action) => {
    return utilities.updateObject(state, {
        loading: true
      });
}

const fetchCountriesSuccess = (state, action) => {
    return utilities.updateObject(state, {
        countries: action.countries,
        loading: false,
        error: false
      });
}

const fetchCountriesFailed = (state, action) => {
    return utilities.updateObject(state, {
        countries: null,
        loading: false,
        error: true
      });
}
const reducer = (state = initialState, action) => {
    console.log("In reducer fired", action)
    switch (action.type) {
      case actionTypes.FETCH_COUNTRIES_START:
        return fetchCountriesStart(state, action);
      case actionTypes.FETCH_COUNTRIES_SUCCESS:
        return fetchCountriesSuccess(state, action);
      case actionTypes.FETCH_COUNTRIES_FAILED:
        return fetchCountriesFailed(state, action);
      default:
        break;
    }
    return state;
  };
  
  export default reducer;