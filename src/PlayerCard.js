import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  margin: 0 10px 20px 10px;
  > * {
  }

  .playerchamp {
    width: 130px;
    height: 130px;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
    margin: 20px 20px 8px 20px;
    background-color: white;
  }

  .name {
    font-size: 20px;
  }

  .score {
    font-size: 24px;
    color: red;
  }

  .rank {
    font-size: 18px;
  }
`;

const PlayerCard = ({ name, score, rank, playerchamp }) => {
  return (
    <StyledCard>
      <img
        className="playerchamp"
        src={require(`./img/${playerchamp}_portrait.png`)}
        alt="portrait"
      />
      <div className="name">{name}</div>
      <div className="score">{score}</div>
      <div className="rank">{rank}</div>
    </StyledCard>
  );
};

export default PlayerCard;