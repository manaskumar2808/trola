import baseUrl from './baseUrl';
import axios from 'axios';

const instance = axios.create({
    baseURL: baseUrl + 'comment/',
});

export default instance;