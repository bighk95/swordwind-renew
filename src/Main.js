import React from 'react';
import MatchResultRow from './MatchResultRow';
import styled from 'styled-components';

const Main = ({ result = [], message }) => {
  return (
    <StyledResultContainer>
      <StyledResult>
        {result.map((data, key) => (
          <MatchResultRow key={key} matchInfo={data} />
        ))}
        <span className="message">{message}</span>
      </StyledResult>
    </StyledResultContainer>
  );
};

const StyledResultContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledResult = styled.div`
  text-align: center;
  margin-top: 30px;
  .message {
    font-size: 20px;
  }
`;

export default Main;
