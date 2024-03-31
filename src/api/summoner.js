import axios from 'axios';

export const api = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
  },
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const search = async (gameName, tagLine) => {
  return await api.get(`/api/swordwind/summoner/search/${gameName}/${tagLine}`);
};

export const update = async (gameName, tagLine) => {
  return await api.post(
    `/api/swordwind/summoner/update/${gameName}/${tagLine}`,
  );
};
