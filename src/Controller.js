import { React, useState } from 'react';
import styled from 'styled-components';

const Controller = ({ onClose }) => {
  const [targetId, setTargetId] = useState('');
  const [targetPercentage, setTargetPercentage] = useState('');
  const [renderAppliedId, setRenderAppliedId] = useState('');
  const [renderAppliedPercentage, setRenderAppliedPercentage] = useState('');

  const apply = () => {
    setRenderAppliedId(targetId);
    setRenderAppliedPercentage(targetPercentage);

    setTargetId('');
    setTargetPercentage('');

    return (
      <div className="appliedInfoContainer">
        <div className="id">{renderAppliedId}</div>
        <div className="percentage">{renderAppliedPercentage}</div>
        <img src={require(`./img/exit.png`)} alt="deleteAppliedPatch"></img>
      </div>
    );
  };

  const handleInputId = (e) => {
    const inputId = e.target.value;
    setTargetId(inputId);
  };

  const handleInputPercentage = (e) => {
    const inputPercentage = e.taget.value;
    setTargetPercentage(inputPercentage);
  };

  return (
    <ModalContainer onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalTitle>유저 밸런스 패치</ModalTitle>
        <PatchContainer>
          <InputContainer>
            <FirstTitleContainer>
              <Title1>이름</Title1>
              <PlayerInput
                placeholder="소환사 이름 + #KR1"
                onChange={handleInputId}
              ></PlayerInput>
            </FirstTitleContainer>
            <SecondTitleContainer>
              <Title2>밸런스</Title2>
              <PercentageInput
                type="number"
                placeholder="배율 ex) 0.8 = 점수의 80%"
                onChange={handleInputPercentage}
              ></PercentageInput>
            </SecondTitleContainer>
          </InputContainer>
          <Apply
            onClick={(e) => {
              e.stopPropagation();
              apply();
            }}
          >
            적용
          </Apply>
        </PatchContainer>
        <AppliedPatchContainer>
          <AppliedPatch>적용된 패치</AppliedPatch>
          <IndivController>
            <AppliedId>홍길동</AppliedId>
            <AppliedPercentage>0.8</AppliedPercentage>
            <DeleteAppliedPatch
              src={require(`./img/exit.png`)}
              alt="deleteAppliedPatch"
            ></DeleteAppliedPatch>
          </IndivController>
        </AppliedPatchContainer>
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
  max-width: 600px;
  width: 90%;
  max-height: 700px;
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
  margin-right: 30px;
  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

const Title1 = styled.div`
  font-size: 18px;
  font-weight: bold;

  margin-right: 20px;
`;

const Title2 = styled.div`
  font-size: 18px;
  font-weight: bold;

  margin-right: 20px;
`;

const FirstTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const PlayerInput = styled.input`
  width: 200px;
  height: 36px;

  margin: 10px;
  font-size: 16px;

  border: 1px solid rgb(51, 51, 51);
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
`;
const PercentageInput = styled.input`
  width: 200px;
  height: 36px;

  margin: 10px;
  font-size: 16px;

  border: 1px solid rgb(51, 51, 51);
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
`;

const AppliedPatchContainer = styled.div``;

const AppliedPatch = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin: 50px 0 20px 50px;
`;

const IndivController = styled.div`
  display: flex;

  margin-left: 50px;
`;

const AppliedId = styled.div``;

const AppliedPercentage = styled.div``;

const DeleteAppliedPatch = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

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
