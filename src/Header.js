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
            placeholder="소환사 이름"
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
  text-decoration-line: none;
  color: black;
`;

const StyledContainer = styled.div`
  margin-top: 30px;
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
  box-shadow: 2px 2px 2px black;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-bottom: 4px solid rgba(0, 0, 0, 0.21);
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);

  padding-top: 4px;
  font-size: 14px;
  height: 40px;
  width: 60px;
  margin: 0 10px 0 10px;
  background-color: #1e90ff;
  transition: 0.2s ease;

  &:hover {
    background-color: #3e9fff;
  }

  &:active {
    box-shadow: none;
  }
`;

export default Header;
