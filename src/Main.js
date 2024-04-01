import React from 'react';
import MatchResultRow from './MatchResultRow';
import { styled, css } from 'styled-components';
import Loader from './Loader';

const Main = ({ loading, matches = [], myName }) => {
  return (
    <StyledResultContainer>
      <StyledResult>
        {loading && <Loader />}
        {matches.map((match, index) => {
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
            <LoadingResultContainer
              key={index}
              isFirst={index === 0}
              loading={loading}
            >
              <MatchResultRow
                matchInfo={match}
                myTeamId={myTeamId}
                isWin={isWin}
              />
            </LoadingResultContainer>
          );
        })}
      </StyledResult>
    </StyledResultContainer>
  );
};
const LoadingResultContainer = styled.div`
  ${(props) =>
    props.isFirst &&
    props.loading &&
    css`
      margin-top: 200px;
    `}
`;

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
