import React from 'react';
import styled from 'styled-components';
const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    width: 160px;
    height: 160px;
    border: 1px solid #E2E2E2;
    border-radius: 50%;
    margin: 20px;
    background-color: white;
    gap: 8px;
    
    > * {
    }

    .name {
        font-size: 24px;
        font-weight: bold;
    }

    .score {
        font-size: 24px;
        color: red;
    }

    .rank {
        font-size: 18px;
    }
`


const PlayerCard = ({ name, score, rank, champIcon }) => {
    return (
        <StyledCard>
            <div className='champIcodn'>{champIcon}</div>
            <div className='name'>{name}</div>
            <div className='score'>{score}</div>
            <div className='rank'>{rank}</div>
        </StyledCard>
    );
};

export default PlayerCard;