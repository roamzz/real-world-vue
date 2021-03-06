import axios from 'axios';

//export default axios.create({
//  baseURL: 'http://localhost:3000'
//});

export default axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});