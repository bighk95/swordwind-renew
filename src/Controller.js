import React from 'react';
import styled from 'styled-components';

const Controller = ({ onClose }) => {
  return (
    <StyledModalContainer onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledModalTitle>유저 밸런스 패치</StyledModalTitle>
        <StyledPatchContainer>
          <StyledInputContainer>
            <StyledPlayerInput placeholder="소환사 이름 + #KR1"></StyledPlayerInput>
            <StyledPercentageInput placeholder="배율 ex) 0.8 = 점수의 80%"></StyledPercentageInput>
          </StyledInputContainer>
          <StyledApplyContainer>
            <StyledApply
              onClick={(e) => {
                e.stopPropagation();
                alert('패치를 적용하였습니다.');
              }}
            >
              적용
            </StyledApply>
          </StyledApplyContainer>
        </StyledPatchContainer>
        <StyledAppliedPatch></StyledAppliedPatch>
        <StyledReset
          src={require(`./img/reset.png`)}
          alt="reset"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm('모든 패치를 초기화하시겠습니까?')) {
              alert('모든 패치를 초기화하였습니다.');
            }
          }}
        />
        <StyledExit
          src={require(`./img/exit.png`)}
          alt="exit"
          onClick={onClose}
        ></StyledExit>
      </StyledModal>
    </StyledModalContainer>
  );
};

const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;

  max-height: 500px;
  height: 90%;
`;

const StyledModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const StyledPatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    width: 200px;
    height: 36px;

    margin: 10px;
    font-size: 16px;
  }
`;

const StyledApplyContainer = styled.div``;

const StyledApply = styled.button`
  width: 100px;
  height: 104px;

  text-decoration: none;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledPlayerInput = styled.input``;
const StyledPercentageInput = styled.input``;

const StyledAppliedPatch = styled.div``;

const StyledReset = styled.img`
  display: flex;
  position: relative;
  top: 200px;
  margin: 0 auto;

  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const StyledExit = styled.img`
  display: flex;
  position: relative;
  width: 36px;
  height: 36px;
  cursor: pointer;

  bottom: 230px;
  left: 460px;
`;
export default Controller;
