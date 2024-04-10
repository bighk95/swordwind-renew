import React from 'react';
import Header from './Header';
import Main from './Main';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NotFound from './NotFound';
import Controller from './Controller';
import Img from './img/Img.js';
import { search, update } from './api/summoner.js';

const Layout = () => {
  const [searchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get('name') || '');
  const [matches, setMatches] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [isControllerOpen, setIsControllerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (window.location.search === '') {
      setMatches([]);
    }
  }, [location]);

  const closeController = () => {
    setIsControllerOpen(false);
  };

  const handleSearch = async (e) => {
    e?.preventDefault();
    setIsLoading(true);

    let [playerName, tagName] = e.target.name.value.split('#');
    tagName = tagName || '';

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
        navigate(
          '/?name=' +
            encodeURIComponent(playerName + (tagName ? '#' + tagName : '')),
        );
        setId(e.target.name.value);
        setMatches(foundData);
        setMessage('');
      } else {
        navigate(
          '/?name=' +
            encodeURIComponent(playerName + (tagName ? '#' + tagName : '')),
        );
        setId(e.target.name.value);
        setMatches(foundData);
        setMessage('최신 정보가 없습니다. 전적 갱신을 해주세요.');
      }
    } catch (error) {
      navigate(
        '/?name=' +
          encodeURIComponent(playerName + (tagName ? '#' + tagName : '')),
      );
      setId(e.target.name.value);
      setMatches([]);
      setMessage('검색 결과가 없습니다. ID와 Tag를 확인해주세요.');
      return;
    } finally {
      setIsLoading(false);
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
        navigate(
          '/?name=' +
            encodeURIComponent(playerName + (tagName ? '#' + tagName : '')),
        );
        setId(playerName + (tagName ? '#' + tagName : ''));
        setMatches(foundData);
        setMessage('');
      }
    } catch (error) {
      navigate(
        '/?name=' +
          encodeURIComponent(playerName + (tagName ? '#' + tagName : '')),
      );
      setId(playerName + (tagName ? '#' + tagName : ''));
      setMatches([]);
      setMessage('검색 결과가 없습니다. ID와 Tag를 확인해주세요.');
      return;
    }
  };

  useEffect(() => {
    const loadDataBasedOnURL = async () => {
      const searchName = new URLSearchParams(window.location.search).get(
        'name',
      );
      if (searchName) {
        setIsLoading(true);
        const [playerName, tagName] = searchName.split('#');
        setId(searchName);
        try {
          const matchListResponse = await search(playerName, tagName || '');
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
          setMatches(foundData);
          setMessage(
            foundData.length > 0
              ? ''
              : '최신 정보가 없습니다. 전적 갱신을 해주세요.',
          );
        } catch (error) {
          setMatches([]);
          setMessage('검색 결과가 없습니다. ID와 Tag를 확인해주세요.');
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadDataBasedOnURL();

    const handlePopState = () => {
      loadDataBasedOnURL();
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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

  return (
    <Background onClick={closeController}>
      <Header
        setMatches={setMatches}
        setMessage={setMessage}
        message={message}
        handleSearch={handleSearch}
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
      <BalanceController
        src={Img.ModalController}
        alt="BalanceController"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          setIsControllerOpen(!isControllerOpen);
        }}
      />
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${Img.HomeBackground});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.9;
`;

const BalanceController = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 70px;
  height: 91px;
`;

export default Layout;
