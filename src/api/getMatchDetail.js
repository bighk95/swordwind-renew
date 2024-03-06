import axios from 'axios';
const getMatchDetail = async ({ matchId }) => {
  return await axios.get(`/api/match-detail/${matchId}`);
};

export default getMatchDetail;
