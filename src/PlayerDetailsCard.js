import React from 'react';
import styled from 'styled-components';

const DetailsCard = styled.div`
  width: 120px;
  margin: 0 46px 10px 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;

  & > div {
    margin-bottom: 4px;
  }
`;

const PlayerDetailsCard = ({ deal, tank, heal }) => {
  return (
    <DetailsCard>
      <div className="deal">딜량 : {deal.toLocaleString('ko-KR')}</div>
      <div className="tank">탱량 : {tank.toLocaleString('ko-KR')}</div>
      <div className="heal">힐량 : {heal.toLocaleString('ko-KR')}</div>
    </DetailsCard>
  );
};

export default PlayerDetailsCard;
