import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as constants from "../../const";

const fetchCountriesSuccess = countries => {
    return {
        type: actionTypes.FETCH_COUNTRIES_SUCCESS,
        countries: countries
    };
};

const fetchCountriesFailed = error => {
    return {
        type: actionTypes.FETCH_COUNTRIES_FAILED,
        error: error
    };
};
const fetchCountriesStart = () => {
    return {
        type: actionTypes.FETCH_COUNTRIES_START
    };
};

export const fetchCountriesInit = () => {
    return dispatch => {
        dispatch(fetchCountriesStart());
        axios.get(constants.COUNTRIES_API)
            .then(response => {
                console.log(response.data)
                dispatch(fetchCountriesSuccess(response.data))
            })
            .catch(error => {
                console.log("Error in getting the data", error);
            });
    };
};