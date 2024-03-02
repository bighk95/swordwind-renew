import React from 'react';
import Header from './Header';
import Main2 from './Main2';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MockData from './mock';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [id, setId] = useState(searchParams.get('name') || '');
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState('');

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
    navigate('/search?name=' + id);

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

  useEffect(() => {
    if (!id) {
      navigate('/');
    }
    return () => {};
  }, [id]);

  // result
  return (
    <div>
      <Header
        handleSearch={handleSearch}
        onChangeSearchInput={(e) => setId(e.target.value)}
        summonerName={id}
      />
      <Routes>
        <Route
          path="/"
          element={
            <StyledMainImage
              src={require(
                `./img/riot-games-self-publish-league-legends-teamfight-tactics-southeast-asia.png`,
              )}
              alt="MainImage"
            />
          }
        />
        <Route
          path="/search"
          element={<Main2 result={result} message={message} />}
        />
      </Routes>
    </div>
  );
};

const StyledMainImage = styled.img`
  width: 1280px;
  height: 640px;
`;

export default Layout;
