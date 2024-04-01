import React from 'react';
import Header from './Header';
import Main from './Main';
import { useSearchParams, useParams, useBeforeunload } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainImage from './img/riot-games-self-publish-league-legends-teamfight-tactics-southeast-asia.png';
import NotFound from './NotFound';
import Controller from './Controller';
import Img from './img/img.js';
import { search, update } from './api/summoner.js';
import Loader from './Loader.js';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get('name') || '');
  const [matches, setMatches] = useState([]);
  const [message, setMessage] = useState('');
  // const [prevId, setPrevId] = useState(null);
  const navigate = useNavigate();
  const [isControllerOpen, setIsControllerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const closeController = () => {
    setIsControllerOpen(false);
  };

  const handleSearch = async (e) => {
    e?.preventDefault();

    const playerName = e.target.name.value.split('#')[0];
    const tagName = e.target.name.value.split('#')[1];

    let matchListResponse;
    try {
      matchListResponse = await search(playerName, tagName);
      const foundData = matchListResponse.data;
      for (let i = 0; i < foundData.length; i++) {
        for (let j = 0; j < foundData[i].length; j++) {
          foundData[i][j].totalScoreScale = Math.round(
            foundData[i][j].totalDamageDealtToChampions +
              foundData[i][j].totalDamageTaken * 0.4 +
              foundData[i][j].totalHeal * 0.2,
          );
        }
      }
      if (foundData.length > 0) {
        navigate('/?name=' + encodeURIComponent(playerName + '#' + tagName));
        setId(e.target.name.value);
        setMatches(foundData);
        setMessage('');
      } else {
        navigate('/?name=' + encodeURIComponent(playerName + '#' + tagName));
        setId(e.target.name.value);
        setMatches(foundData);
        setMessage('최신 정보가 없습니다. 전적 갱신을 해주세요.');
      }
    } catch (error) {
      navigate('/?name=' + encodeURIComponent(playerName + '#' + tagName));
      setId(e.target.name.value);
      setMatches([]);
      setMessage('검색 결과가 없습니다. ID와 Tag를 확인해주세요.');
      return;
    }
  };

  const reHandleSearch = async (playerName, tagName) => {
    let matchListResponse;
    try {
      matchListResponse = await search(playerName, tagName);
      const foundData = matchListResponse.data;
      for (let i = 0; i < foundData.length; i++) {
        for (let j = 0; j < foundData[i].length; j++) {
          foundData[i][j].totalScoreScale = Math.round(
            foundData[i][j].totalDamageDealtToChampions +
              foundData[i][j].totalDamageTaken * 0.4 +
              foundData[i][j].totalHeal * 0.2,
          );
        }
      }
      if (foundData.length > 0) {
        navigate('/?name=' + encodeURIComponent(playerName + '#' + tagName));
        setId(playerName + '#' + tagName);
        setMatches(foundData);
        setMessage('');
      }
    } catch (error) {
      navigate('/?name=' + encodeURIComponent(playerName + '#' + tagName));
      setId(playerName + '#' + tagName);
      setMatches([]);
      setMessage('검색 결과가 없습니다. ID와 Tag를 확인해주세요.');
      return;
    }
  };

  useEffect(() => {
    if (id && id.includes('#')) {
      const [playerName, tagName] = id.split('#');
      reHandleSearch(playerName, tagName);
    }
  }, [id]);

  const handleUpdate = async (e) => {
    setIsLoading(true);
    setError(null);
    e?.preventDefault();
    const playerName = id.split('#')[0];
    const tagName = id.split('#')[1];

    try {
      await update(playerName, tagName);
      await reHandleSearch(playerName, tagName);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // result
  return (
    <StyledBackground onClick={closeController}>
      <Header
        setMatches={setMatches}
        handleSearch={handleSearch}
        message={message}
        handleUpdate={handleUpdate}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              loading={isLoading}
              matches={matches}
              message={message}
              myName={id}
            />
          }
        ></Route>

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
