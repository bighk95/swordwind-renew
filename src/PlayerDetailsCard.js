import React from 'react';
import styled from 'styled-components';

const StyledDetailsCard = styled.div`
    width :120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`


const PlayerDetailsCard = ({ deal, tank, heal }) => {
    return ( 
        <StyledDetailsCard>
            <div className='deal'>딜량 : {deal}</div>
            <div className='tank'>탱량 : {tank}</div>
            <div className='heal'>힐량 : {heal}</div>
        </StyledDetailsCard>
    );
};

export default PlayerDetailsCard;