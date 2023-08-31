import axios from 'axios';

// axios.defaults.baseURL = 'https://pop-pursuit-api.vercel.app/api';

axios.defaults.baseURL = 'http://localhost:5001/api';

export default {
  get: function (str) {
    return axios.get(str).then(({ data }) => data);
  },
};
