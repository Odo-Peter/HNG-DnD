import axios from 'axios';
const BASE_URL = '/api/users';

export const createUser = async (credentials) => {
  const res = await axios.post(BASE_URL, credentials);
  return res.data;
};
