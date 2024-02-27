import React, { useState } from 'react';
import styled from 'styled-components';
import MockData from './mock';
import MatchResultRow from './MatchResultRow';

const Header = () => {
  const [id, setId] = useState('');
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState('');

  // let playedId = [];
  // for(let key in MockData){
  //     playedId = [...playedId, ...Object.keys(MockData[key][0])];
  // }

  const handleSearch = (e) => {
    e.preventDefault();

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
            score: data[player].playerDeal + data[player].playerTank * 0.4 + data[player].playerHeal * 0.2,
          };
        }
        foundData.push(filteredData);
      }
    }

    if (foundData.length > 0) {
      setResult(foundData);
      setMessage('');
    } else {
      setResult([]);
      setMessage('검색 결과가 없습니다. ID를 확인하세요.');
    }
  };

  return (
    <div>
      <StyledContainer>
        <StyledTitle href="/">
          <h1>칼바람 나락 기여도 랭킹</h1>
        </StyledTitle>
        <form onSubmit={handleSearch}>
          <StyledInput
            type="text"
            placeholder="소환사 이름"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></StyledInput>
          <StyledButton onClick={handleSearch}>검색</StyledButton>
        </form>
      </StyledContainer>
      <StyledResultContainer>
        <StyledResult>
          {result.map((data, key) => (
            <MatchResultRow key={key} matchInfo={data} />
          ))}
          {message}
        </StyledResult>
      </StyledResultContainer>
    </div>
  );
};

const StyledTitle = styled.a`
  text-decoration-line: none;
  color: black;
`;

const StyledResultContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledResult = styled.div`
  text-align: center;
  margin: 20px 0 20px 0;
`;

const StyledContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 200px;
  text-align: center;
`;

const StyledButton = styled.button`
  height: 37px;
  width: 50px;
  margin: 0 10px 0 10px;
`;

export default Header;
