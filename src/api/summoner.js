import axios from 'axios';

export const search = async ({ gameName, tagLine }) => {
  return await axios.get('/api/swordwind/summoner/search/똥개인척하는범/KR2');
};

export const update = async ({ gameName, tagLine }) => {
  return await axios.get('/api/swordwind/summoner/update/똥개인척하는범/KR2');
};
