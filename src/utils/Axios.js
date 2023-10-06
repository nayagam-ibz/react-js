import axios from 'axios';
import humps from 'humps';

export const convertRequest = (data) => humps.decamelizeKeys(data);
export const convertResponse = (data) => humps.camelizeKeys(data);

const API_URL = process.env.REACT_APP_API_URL;
const formatURL = (uri) => `${API_URL}${uri}`;

export const handleResponse = (response) => ({ ...convertResponse(response.data) });
export const errorResponse = (error) => ({ errors: convertResponse(error.response.data.errors) });

export const makeGETRequest = (uri, queryParams = {}) => axios.get(formatURL(uri), { params: convertRequest(queryParams) });
export const makePOSTRequest = (uri, body, config = {}) => axios.post(formatURL(uri), convertRequest(body), config);
export const makePUTRequest = (uri, body, config = {}) => axios.put(formatURL(uri), convertRequest(body), config);
export const makeDELETERequest = (uri, body, config = {}) => axios.delete(formatURL(uri), convertRequest(body), config);
export const makeFormDataPOSTRequest = (uri, body, config = {}) => axios.post(formatURL(uri), body, config);
export const makeFormDataPUTRequest = (uri, body, config = {}) => axios.put(formatURL(uri), body, config);
