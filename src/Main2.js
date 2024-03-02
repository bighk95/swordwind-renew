import React from 'react';
import MatchResultRow from './MatchResultRow';
import styled from 'styled-components';

const Main2 = ({ result = [], message }) => {
  return (
    <StyledResultContainer>
      <StyledResult>
        {result.map((data, key) => (
          <MatchResultRow key={key} matchInfo={data} />
        ))}
        {message}
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
  margin: 20px 0 20px 0;
`;

export default Main2;
