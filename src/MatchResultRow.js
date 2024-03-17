import React, { useState, useContext } from 'react';
import PlayerDetailsCard from './PlayerDetailsCard';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';
import { ScaleContext } from './context/ScaleContext';

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
    props.$backgroundSetting(props.matchfinalresult, props.$isbuttonhovered)};

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
    props.$backgroundSetting(props.matchfinalresult, props.$isbuttonhovered)};

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
  const { scaleList } = useContext(ScaleContext);

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

  const scaleMap = {};
  scaleList.forEach((scale) => {
    Object.defineProperty(scaleMap, scale.id.toLowerCase(), {
      value: parseFloat(scale.percentage),
      writable: true,
    });
  });

  console.log('scaleList', scaleList);
  console.log('scaleMap', scaleMap['zac#kr111']);

  // console.log(matchInfo);
  // console.log(myTeamId);
  return (
    <Container
      matchfinalresult={matchFinalResult}
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
                b.totalScoreScale *
                  scaleMap[
                    `${b.playerNickname.toLowerCase().replaceAll(' ', '')}#${b.playerTagname.toLowerCase()}`
                  ]
                  ? scaleMap[
                      `${b.playerNickname.toLowerCase().replaceAll(' ', '')}#${b.playerTagname.toLowerCase()}`
                    ] * b.totalScoreScale
                  : 1 * b.totalScoreScale,
              ) -
              Math.round(
                a.totalScoreScale *
                  scaleMap[
                    `${a.playerNickname.toLowerCase().replaceAll(' ', '')}#${a.playerTagname.toLowerCase()}`
                  ]
                  ? scaleMap[
                      `${a.playerNickname.toLowerCase().replaceAll(' ', '')}#${a.playerTagname.toLowerCase()}`
                    ] * a.totalScoreScale
                  : 1 * a.totalScoreScale,
              ),
          )
          .filter((summoner) => summoner.teamId === myTeamId)
          .map((summoner, index) => {
            return (
              <PlayerCard
                key={index}
                name={summoner.playerNickname.toLowerCase()}
                score={
                  scaleMap[
                    `${summoner.playerNickname.toLowerCase().replaceAll(' ', '')}#${summoner.playerTagname.toLowerCase()}`
                  ]
                    ? Math.round(
                        scaleMap[
                          `${summoner.playerNickname.toLowerCase().replaceAll(' ', '')}#${summoner.playerTagname.toLowerCase()}`
                        ] * summoner.totalScoreScale,
                      )
                    : summoner.totalScoreScale
                }
                matchfinalresult={true}
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
                      `${b.playerNickname.toLowerCase().replaceAll(' ', '')}#${b.playerTagname.toLowerCase()}`
                    ]
                    ? scaleMap[
                        `${b.playerNickname.toLowerCase().replaceAll(' ', '')}#${b.playerTagname.toLowerCase()}`
                      ] * b.totalScoreScale
                    : 1 * b.totalScoreScale,
                ) -
                Math.round(
                  a.totalScoreScale *
                    scaleMap[
                      `${a.playerNickname.toLowerCase().replaceAll(' ', '')}#${a.playerTagname.toLowerCase()}`
                    ]
                    ? scaleMap[
                        `${a.playerNickname.toLowerCase().replaceAll(' ', '')}#${a.playerTagname.toLowerCase()}`
                      ] * a.totalScoreScale
                    : 1 * a.totalScoreScale,
                ),
            )
            .filter((summoner) => summoner.teamId === myTeamId)
            .map((name, index) => (
              <PlayerDetailsCard
                key={index}
                name={name}
                deal={name.dealingScale}
                tank={name.tankingScale}
                heal={name.healingScale}
              />
            ))}
      </div>
      {matchInfo && (
        <ShowMatchDetails
          className="showMatchDetails"
          matchfinalresult={matchFinalResult}
          $isbuttonhovered={isButtonHovered}
          $backgroundSetting={backgroundSetting}
          onClick={ShowMatchDetailsButton}
          $matchdetailsopen={matchDetailsOpen}
        >
          <img
            className="arrow"
            src={require(`./img/downArrow.png`)}
            alt="detailButton"
          />
        </ShowMatchDetails>
      )}
    </Container>
  );
};

export default MatchResultRow;
