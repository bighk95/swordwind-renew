import React from 'react';
import MatchResultRow from './MatchResultRow';
import styled from 'styled-components';
import Loader from './Loader';

const Main = ({ loading, matches = [], myName }) => {
  return (
    <StyledResultContainer>
      <StyledResult>
        {loading && <Loader />}
        {matches.map((match, key) => {
          const myTeamId = match.find((item) => {
            return (
              (
                item.summoner.gameName.toLowerCase() +
                '#' +
                item.summoner.tagLine.toLowerCase()
              )
                .replaceAll(' ', '')
                .toLowerCase() === myName.toLowerCase().replaceAll(' ', '')
            );
          })?.teamId;

          const isWin = match.find((item) => {
            return (
              (item.summoner.gameName + '#' + item.summoner.tagLine)
                .replaceAll(' ', '')
                .toLowerCase() === myName.toLowerCase().replaceAll(' ', '')
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
