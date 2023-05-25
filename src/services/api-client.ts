import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',

  params: {
    key: 'dae78da470c14f4eb0ff965cbb8dfb72',
  },
});
