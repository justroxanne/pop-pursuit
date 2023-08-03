import axios from 'axios';

axios.defaults.baseURL = 'http://pop-pursuit-api.vercel.app/api';

export default {
  get: function (str) {
    return axios.get(str).then(({ data }) => data);
  },
};
