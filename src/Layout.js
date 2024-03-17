import React from 'react';
import Header from './Header';
import Main from './Main';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainImage from './img/riot-games-self-publish-league-legends-teamfight-tactics-southeast-asia.png';
import NotFound from './NotFound';
import Controller from './Controller';
import getMatchNumberList from './api/getMatchNumberList';
import getMatchDetail from './api/getMatchDetail';
import Img from './img/img.js';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get('name') || '');
  const [matches, setMatches] = useState([]);
  const [message, setMessage] = useState('');
  const [prevId, setPrevId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isControllerOpen, setIsControllerOpen] = useState(false);

  const closeController = () => {
    setIsControllerOpen(false);
  };

  const handleSearch = async (e) => {
    e?.preventDefault();

    const playerName = e.target.name.value.split('#')[0];
    const tagName = e.target.name.value.split('#')[1];

    let matchListResponse;
    try {
      matchListResponse = await getMatchNumberList({
        playerName,
        tagName,
      });
    } catch (error) {
      navigate('/search?name=' + e.target.name.value);
      setId(e.target.name.value);
      setMatches([]);
      setMessage('검색 결과가 없습니다. ID와 Tag를 확인해주세요.');
      return;
    }

    const matchId = matchListResponse.data.data;

    const totalData = [];
    for (let i = 0; i < matchId.length; i++) {
      try {
        const detailInfoResponse = await getMatchDetail({
          matchId: matchId[i],
        });
        totalData.push(detailInfoResponse.data.data);
      } catch (error) {}
    }

    let foundData = [];
    for (let i = 0; i < totalData.length; i++) {
      let oneMatchDataContainer = [];
      for (let player in totalData[i]) {
        const summonerInfo = {
          matchId: totalData[i][player].matchId,
          gameMode: totalData[i][player].gameMode,
          playerNickname: totalData[i][player].gameName.toLowerCase(),
          playerTagname: totalData[i][player].tagLine.toLowerCase(),
          teamId: totalData[i][player].teamId,
          win: totalData[i][player].win,
          championName: totalData[i][player].championName,
          dealingScale: totalData[i][player].totalDamageDealtToChampions,
          tankingScale: totalData[i][player].totalDamageTaken,
          healingScale: totalData[i][player].totalHeal,
          totalScoreScale: Math.round(
            totalData[i][player].totalDamageDealtToChampions +
              totalData[i][player].totalDamageTaken * 0.4 +
              totalData[i][player].totalHeal * 0.2,
          ),
        };
        oneMatchDataContainer.push(summonerInfo);
      }
      foundData.push(oneMatchDataContainer);
    }

    navigate('/search?name=' + e.target.name.value);
    setId(e.target.name.value);
    if (foundData.length > 0) {
      setMatches(foundData);
      setMessage('');
    }
  };

  // result
  return (
    <StyledBackground onClick={closeController}>
      <Header handleSearch={handleSearch} message={message} />
      <Routes>
        <Route path="/"></Route>
        <Route
          path="/search"
          element={<Main matches={matches} message={message} myName={id} />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {isControllerOpen && <Controller onClose={closeController} />}
      <StyledBalanceController
        src={Img.ModalController}
        alt="BalanceController"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          setIsControllerOpen(!isControllerOpen);
        }}
      />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${MainImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.9;
`;

const StyledBalanceController = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 70px;
  height: 91px;
`;

export default Layout;
