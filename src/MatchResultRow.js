import React, { useState, useContext, useEffect } from 'react';
import PlayerDetailsCard from './PlayerDetailsCard';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';
import { ScaleContext } from './context/ScaleContext';
import Img from './img/Img';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 2px solid #434a54;
  border-radius: 20px;
  transition: background 0.5s ease;

  background: ${(props) =>
    props.$backgroundSetting(props.$matchfinalresult, props.$isbuttonhovered)};

  .simpleInfo {
    display: flex;
    width: 100%;
  }

  .detailInfo {
    display: flex;
    width: 100%;
  }
`;

const ShowMatchDetails = styled.button`
  width: 100%;
  border: 2px solid #434a54;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.5s ease;

  background: ${(props) =>
    props.$backgroundSetting(props.$matchfinalresult, props.$isbuttonhovered)};

  .arrow {
    width: 25px;
    height: 30px;

    transition: transform 0.5s ease;
    transform: ${(props) =>
      props.$matchdetailsopen ? 'rotateX(180deg)' : 'rotateX(0)'};
  }
`;

const MatchResultRow = ({ matchInfo, myTeamId, isWin }) => {
  const [matchDetailsOpen, setMatchDetailsOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const matchFinalResult = isWin;
  const { scaleMap } = useContext(ScaleContext);

  const backgroundSetting = (matchFinalResult, isButtonHovered) => {
    if (matchFinalResult) {
      if (isButtonHovered) {
        return '#AEDCFA';
      } else {
        return '#D6ECFA';
      }
    } else {
      if (isButtonHovered) {
        return '#FFB7BE';
      } else {
        return '#FFE0E3';
      }
    }
  };

  const ShowMatchDetailsButton = () => {
    setMatchDetailsOpen((prev) => !prev);
  };

  return (
    <Container
      $matchfinalresult={matchFinalResult}
      $isbuttonhovered={isButtonHovered}
      $backgroundSetting={backgroundSetting}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
    >
      <div className="simpleInfo">
        {matchInfo
          .sort(
            (a, b) =>
              Math.round(
                scaleMap[
                  `${b.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${b.summoner.tagLine.toLowerCase()}`
                ]
                  ? scaleMap[
                      `${b.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${b.summoner.tagLine.toLowerCase()}`
                    ] * b.totalScoreScale
                  : 1 * b.totalScoreScale,
              ) -
              Math.round(
                scaleMap[
                  `${a.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${a.summoner.tagLine.toLowerCase()}`
                ]
                  ? scaleMap[
                      `${a.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${a.summoner.tagLine.toLowerCase()}`
                    ] * a.totalScoreScale
                  : 1 * a.totalScoreScale,
              ),
          )
          .filter((summoner) => summoner.teamId === myTeamId)
          .map((summoner, index) => {
            return (
              <PlayerCard
                key={index}
                name={summoner.summoner.gameName
                  .toLowerCase()
                  .replaceAll(' ', '')}
                score={
                  scaleMap[
                    `${summoner.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${summoner.summoner.tagLine.toLowerCase()}`
                  ]
                    ? Math.round(
                        scaleMap[
                          `${summoner.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${summoner.summoner.tagLine.toLowerCase()}`
                        ] * summoner.totalScoreScale,
                      )
                    : summoner.totalScoreScale
                }
                matchfinalresult={matchFinalResult}
                rank={index + 1 + '등'}
                champ={summoner.championName}
              />
            );
          })}
      </div>
      <div className="detailInfo">
        {matchDetailsOpen &&
          matchInfo
            .sort(
              (a, b) =>
                Math.round(
                  b.totalScoreScale *
                    scaleMap[
                      `${b.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${b.summoner.tagLine.toLowerCase()}`
                    ]
                    ? scaleMap[
                        `${b.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${b.summoner.tagLine.toLowerCase()}`
                      ] * b.totalScoreScale
                    : 1 * b.totalScoreScale,
                ) -
                Math.round(
                  a.totalScoreScale *
                    scaleMap[
                      `${a.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${a.summoner.tagLine.toLowerCase()}`
                    ]
                    ? scaleMap[
                        `${a.summoner.gameName.toLowerCase().replaceAll(' ', '')}#${a.summoner.tagLine.toLowerCase()}`
                      ] * a.totalScoreScale
                    : 1 * a.totalScoreScale,
                ),
            )
            .filter((summoner) => summoner.teamId === myTeamId)
            .map((name, index) => (
              <PlayerDetailsCard
                key={index}
                name={name}
                deal={name.totalDamageDealtToChampions}
                tank={name.totalDamageTaken}
                heal={name.totalHeal}
              />
            ))}
      </div>
      {matchInfo && (
        <ShowMatchDetails
          className="showMatchDetails"
          $matchfinalresult={matchFinalResult}
          $isbuttonhovered={isButtonHovered}
          $backgroundSetting={backgroundSetting}
          onClick={ShowMatchDetailsButton}
          $matchdetailsopen={matchDetailsOpen}
        >
          <img className="arrow" src={Img.DownArrow} alt="detailButton" />
        </ShowMatchDetails>
      )}
    </Container>
  );
};

export default MatchResultRow;
