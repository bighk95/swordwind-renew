import React from 'react';
import styled from 'styled-components';

const StyledDetailsCard = styled.div`
  width: 120px;
  margin: 0 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;
`;

const PlayerDetailsCard = ({ deal, tank, heal }) => {
  return (
    <StyledDetailsCard>
      <div className="deal">딜량 : {deal.toLocaleString('ko-KR')}</div>
      <div className="tank">탱량 : {tank.toLocaleString('ko-KR')}</div>
      <div className="heal">힐량 : {heal.toLocaleString('ko-KR')}</div>
    </StyledDetailsCard>
  );
};

export default PlayerDetailsCard;
