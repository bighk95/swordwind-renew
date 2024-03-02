import React, { useState } from 'react';
import PlayerDetailsCard from './PlayerDetailsCard';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

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

const MatchResultRow = ({ matchInfo }) => {
  const [matchDetailsOpen, setMatchDetailsOpen] = useState(false);
  const matchFinalResult = Object.values(matchInfo)[0].matchFinalResult;
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const backgroundSetting = (matchFinalResult, isButtonHovered) => {
    if (matchFinalResult === 'win') {
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
      matchfinalresult={matchFinalResult}
      $isbuttonhovered={isButtonHovered}
      $backgroundSetting={backgroundSetting}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
    >
      <div className="simpleInfo">
        {Object.keys(matchInfo)
          .sort((a, b) => matchInfo[b].score - matchInfo[a].score)
          .map((name, index) => (
            <PlayerCard
              key={name}
              name={name}
              score={matchInfo[name].score}
              matchfinalresult={matchInfo[name].matchFinalResult}
              rank={index + 1 + '등'}
              playerchamp={matchInfo[name].champ}
            />
          ))}
      </div>
      <div className="detailInfo">
        {matchDetailsOpen &&
          Object.keys(matchInfo)
            .sort((a, b) => matchInfo[b].score - matchInfo[a].score)
            .map((name) => (
              <PlayerDetailsCard
                key={name}
                name={name}
                deal={matchInfo[name].deal}
                tank={matchInfo[name].tank}
                heal={matchInfo[name].heal}
              />
            ))}
      </div>
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
    </Container>
  );
};

export default MatchResultRow;
