import React from 'react';
import styled from 'styled-components';

const Header = ({ handleSearch, onChangeSearchInput, summonerName }) => {
  return (
    <div>
      <StyledContainer>
        <StyledTitle href="/">
          <h1>칼바람 나락 기여도 랭킹</h1>
        </StyledTitle>
        <form onSubmit={handleSearch}>
          <StyledInput
            type="text"
            placeholder="소환사 이름 + #KR1"
            value={summonerName}
            onChange={onChangeSearchInput}
          ></StyledInput>
          <StyledButton onClick={handleSearch}>검색</StyledButton>
        </form>
      </StyledContainer>
    </div>
  );
};

const StyledTitle = styled.a`
  display: inline-block;
  text-decoration-line: none;
  color: black;
`;

const StyledContainer = styled.div`
  padding-top: 30px;
  text-align: center;
`;

const StyledInput = styled.input`
  height: 32px;
  width: 200px;
  text-align: center;
`;

const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  position: relative;
  border-radius: 4px;

  font-size: 14px;
  height: 40px;
  width: 60px;
  margin: 0 10px 0 10px;
  background-color: #1e90ff;
  transition: 0.2s ease;

  &:hover {
    background-color: #3e9fff;
  }
`;

export default Header;
