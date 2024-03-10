import React from 'react';
import MatchResultRow from './MatchResultRow';
import styled from 'styled-components';

const Main = ({ matches = [], myName }) => {
  // console.log(matches);
  return (
    <StyledResultContainer>
      <StyledResult>
        {matches.map((match, key) => {
          // console.log(match);
          const myTeamId = match.find((item) => {
            return (
              (item.playerNickname + '#' + item.playerTagname)
                .replaceAll(' ', '')
                .toLowerCase() === myName
            );
          })?.teamId;

          const isWin = match.find((item) => {
            return (
              (item.playerNickname + '#' + item.playerTagname)
                .replaceAll(' ', '')
                .toLowerCase() === myName
            );
          })?.win;

          return (
            <MatchResultRow
              key={key}
              matchInfo={match}
              myTeamId={myTeamId}
              isWin={isWin}
            />
          );
        })}
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
