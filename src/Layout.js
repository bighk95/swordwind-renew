import React from 'react';
import Header from './Header';
import Main2 from './Main';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MockData from './mock';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainImage from './img/riot-games-self-publish-league-legends-teamfight-tactics-southeast-asia.png';
import NotFound from './NotFound';
import Controller from './Controller';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get('name') || '');
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState('');
  const [prevId, setPrevId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isControllerOpen, setIsControllerOpen] = useState(false);

  const closeController = () => {
    setIsControllerOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== '/search') {
      setPrevId('');
    }
  }, [location]);

  const handleSearch = (e) => {
    e?.preventDefault();

    let foundData = [];
    for (let key in MockData) {
      let data = MockData[key][0];
      if (data[id]) {
        let filteredData = {};
        for (let player in data) {
          filteredData[player] = {
            matchFinalResult: data[player].matchFinalResult,
            team: data[player].playerTeam,
            champ: data[player].playerChamp,
            champIcon: data[player].ChampIcon,
            deal: data[player].playerDeal,
            tank: data[player].playerTank,
            heal: data[player].playerHeal,
            score:
              data[player].playerDeal +
              data[player].playerTank * 0.4 +
              data[player].playerHeal * 0.2,
          };
        }
        foundData.push(filteredData);
      }
    }

    setPrevId(id);
    if (prevId !== id) {
      navigate('/search?name=' + id);
      setPrevId(id);
    } else {
      return;
    }

    if (foundData.length > 0) {
      setResult(foundData);
      setMessage('');
    } else {
      setResult([]);
      setMessage('검색 결과가 없습니다. ID를 확인하세요.');
    }
  };

  useEffect(() => {
    if (id) {
      handleSearch();
    }
    return () => {};
  }, []);

  // result
  return (
    <StyledBackground onClick={closeController}>
      <Header
        handleSearch={handleSearch}
        onChangeSearchInput={(e) => setId(e.target.value)}
        summonerName={id}
      />
      <Routes>
        <Route path="/"></Route>
        <Route
          path="/search"
          element={<Main2 result={result} message={message} />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {isControllerOpen && <Controller onClose={closeController} />}
      <StyledBalanceController
        src={require(`./img/controller3.webp`)}
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
