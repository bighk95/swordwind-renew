import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ handleSearch, handleUpdate, message }) => {
  return (
    <div>
      <StyledContainer>
        <StyledTitle to="/">
          <h1>칼바람 나락 기여도 랭킹</h1>
        </StyledTitle>
        <form onSubmit={handleSearch}>
          <StyledInput
            type="text"
            name="name"
            placeholder="소환사 이름 + #KR1"
          ></StyledInput>
          <StyledButton type="submit">검색</StyledButton>
        </form>
        <form onSubmit={handleUpdate}>
          <StyledButton type="submit">전적갱신</StyledButton>
        </form>
        <span
          className="message"
          style={{
            display: 'inline-block',
            marginTop: '40px',
            fontSize: '24px',
          }}
        >
          {message}
        </span>
      </StyledContainer>
    </div>
  );
};

const StyledTitle = styled(Link)`
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
  border-radius: 8px;

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
