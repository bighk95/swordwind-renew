import axios from 'axios';

export const search = async (gameName, tagLine) => {
  return await axios.get(
    `/api/swordwind/summoner/search/${gameName}/${tagLine}`,
  );
};

export const update = async (gameName, tagLine) => {
  return await axios.post(
    `/api/swordwind/summoner/update/${gameName}/${tagLine}`,
  );
};
