import axios from 'axios';

// This is the configuration for sending HTTP Requests with Axios
// Very simple, but it also doesn't give us much abstraction
const eCommerceClient = axios.create({
  withCredentials: true,
  baseURL: 'https://backonthefarm.azurewebsites.net',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://62d18da0c1d65d36c385ca6e--boisterous-squirrel-08cbc5.netlify.app/'
  }
});

export interface eCommerceApiResponse {
  status: number;
  payload: any;
}

export default eCommerceClient;