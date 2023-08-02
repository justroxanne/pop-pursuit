import axios from 'axios';

axios.defaults.baseURL = '/api';

export default {
  get: function (str) {
    return axios.get(str).then(({ data }) => data);
  },
};
