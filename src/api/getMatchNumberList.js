import axios from 'axios';
const getMatchNumberList = async ({ playerName, tagName }) => {
  return await axios.get(`/api/match-list/${playerName}/${tagName}`);
};

export default getMatchNumberList;
