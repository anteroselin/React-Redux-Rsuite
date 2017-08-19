import axios from 'axios';

export const getUsers = () => {
  return axios.get('/search?country=United+Kingdom', {
    params: {
      total: 1000,
      per_page: 12
    }
  });
};