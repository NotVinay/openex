import * as actionTypes from "./actionTypes";
import axios from "axios";

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
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                console.log(response.data)
                dispatch(fetchCountriesSuccess(response.data))
            })
            .catch(error => {
                console.log("Error in getting the data", error);
            });
    };
};