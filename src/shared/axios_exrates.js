import axios from 'axios';
import * as constants from '../const';

const instance = axios.create({
    baseURL: constants.EXCHANGERATES_API
});

export default instance;