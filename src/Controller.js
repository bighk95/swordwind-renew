import React from 'react';
import styled from 'styled-components';

const Controller = ({ onClose }) => {
  return (
    <ModalContainer onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalTitle>유저 밸런스 패치</ModalTitle>
        <PatchContainer>
          <InputContainer>
            <PlayerInput placeholder="소환사 이름 + #KR1"></PlayerInput>
            <PercentageInput
              type="number"
              placeholder="배율 ex) 0.8 = 점수의 80%"
            ></PercentageInput>
          </InputContainer>
          <ApplyContainer>
            <Apply
              onClick={(e) => {
                e.stopPropagation();
                alert('패치를 적용하였습니다.');
              }}
            >
              적용
            </Apply>
          </ApplyContainer>
        </PatchContainer>
        <AppliedPatch></AppliedPatch>
        <Reset
          src={require(`./img/reset.png`)}
          alt="reset"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm('모든 패치를 초기화하시겠습니까?')) {
              alert('모든 패치를 초기화하였습니다.');
            }
          }}
        />
        <Exit
          src={require(`./img/exit.png`)}
          alt="exit"
          onClick={onClose}
        ></Exit>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
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

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 500px;
  height: 90%;

  position: relative;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

const PatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  & > input {
    width: 200px;
    height: 36px;

    margin: 10px;
    font-size: 16px;
  }
`;

const ApplyContainer = styled.div``;

const Apply = styled.button`
  width: 100px;
  height: 104px;

  text-decoration: none;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 18px;
  font-weight: bold;
`;

const PlayerInput = styled.input``;
const PercentageInput = styled.input``;
const AppliedPatch = styled.div``;

const Reset = styled.img`
  display: flex;
  position: absolute;
  bottom: 30px;
  left: calc(50% - 30px);
  margin: 0 auto;

  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Exit = styled.img`
  display: flex;
  position: absolute;
  width: 36px;
  height: 36px;
  cursor: pointer;

  top: 20px;
  right: 20px;
`;
export default Controller;
