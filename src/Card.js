import React from 'react';
import styled from 'styled-components';
const StyledCard = styled.div`
    display: flex;
    flex-direction: column;

    width: 200px;
    height: 300px;
    border: 1px solid #333;

    div {
        margin: 12px 0;
    }
    .score {
        color: red;
        font-size: 22px;
    }
`


const Card = ({ name, score }) => {
    return (
        <StyledCard>
            <div>{name}</div>
            <div className='score'>{score}</div>
        </StyledCard>
    );
};

export default Card;