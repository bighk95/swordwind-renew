import { React, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ScaleContext } from './context/ScaleContext';
import Img from './img/Img';

const Controller = ({ onClose }) => {
  const [targetId, setTargetId] = useState('');
  const [targetPercentage, setTargetPercentage] = useState('');
  const [targetKey, setTargetKey] = useState(0);
  const { scaleList, addList, removeList, resetList, scaleMap, parseList } =
    useContext(ScaleContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showTooltipAtPlayerInput, setShowTooltipAtPlayerInput] =
    useState(false);
  const [showTooltipAtPercentageInput, setShowTooltipAtPercentageInput] =
    useState(false);
  const [showTooltipAtApplyButton, setShowTooltipAtApplyButton] =
    useState(false);

  useEffect(() => {
    parseList?.length >= 5 ? setIsDisabled(true) : setIsDisabled(false);
  }, [parseList]);

  const apply = () => {
    const isAlreadyPatched = parseList?.some(
      (patch) =>
        patch.id.replaceAll(' ', '').toLowerCase() ===
        targetId.replaceAll(' ', '').toLowerCase(),
    );

    const isValidIdRegx =
      /^[a-zA-Z0-9가-힣\u3400-\u4DBF\u4E00-\u9FFF\u20000-\u2A6DF\u3040-\u309F\u30A0-\u30FF]+#[a-zA-Z0-9가-힣\u3400-\u4DBF\u4E00-\u9FFF\u20000-\u2A6DF\u3040-\u309F\u30A0-\u30FF]+$/;

    if (isValidIdRegx.test(targetId)) {
      if (isAlreadyPatched) {
        alert('이미 해당 소환사에 대한  패치가 적용중입니다.');
      } else {
        setTargetKey(targetKey + 1);
        addList({ id: targetId, percentage: targetPercentage, key: targetKey });
      }
    } else {
      if (
        !targetId.replaceAll(' ', '').includes('#') ||
        targetId.split('#')[1] === ''
      ) {
        alert('소환사 태그를 입력해주세요.');
      } else {
        alert('소환사 닉네임 또는 소환사 태그에 부적절한 문자가 있습니다.');
      }
    }

    setTargetId('');
    setTargetPercentage('');
  };

  const handleInputId = (e) => {
    const inputId = e.target.value;
    setTargetId(inputId);
  };

  const handleInputPercentage = (e) => {
    const inputPercentage = e.target.value;
    setTargetPercentage(inputPercentage);
  };

  const handleDeletePatch = (index) => {
    removeList(index);
  };

  const mouseEnterInDisabledAtPlayerInput = () => {
    if (isDisabled) {
      setShowTooltipAtPlayerInput(true);
    }
  };

  const mouseLeaveInDisabledAtPlayerInput = () => {
    setShowTooltipAtPlayerInput(false);
  };

  const mouseEnterInDisabledAtPercentageInput = () => {
    if (isDisabled) {
      setShowTooltipAtPercentageInput(true);
    }
  };

  const mouseLeaveInDisabledAtPercentageInput = () => {
    setShowTooltipAtPercentageInput(false);
  };

  const mouseEnterInDisabledAtApplyButton = () => {
    if (isDisabled) {
      setShowTooltipAtApplyButton(true);
    }
  };

  const mouseLeaveInDisabledAtApplyButton = () => {
    setShowTooltipAtApplyButton(false);
  };
  return (
    <ModalContainer onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalTitle>유저 밸런스 패치</ModalTitle>
        <PatchContainer>
          <InputContainer>
            <FirstTitleContainer>
              <Title1>이름</Title1>
              <div
                onMouseEnter={mouseEnterInDisabledAtPlayerInput}
                onMouseLeave={mouseLeaveInDisabledAtPlayerInput}
              >
                <PlayerInput
                  placeholder="소환사 이름 + #KR1"
                  value={targetId}
                  onChange={handleInputId}
                  disabled={isDisabled}
                ></PlayerInput>
                {showTooltipAtPlayerInput && isDisabled && (
                  <Tooltip>패치리스트를 더 이상 등록할 수 없습니다.</Tooltip>
                )}
              </div>
            </FirstTitleContainer>
            <SecondTitleContainer>
              <Title2>밸런스</Title2>
              <div
                onMouseEnter={mouseEnterInDisabledAtPercentageInput}
                onMouseLeave={mouseLeaveInDisabledAtPercentageInput}
              >
                <PercentageInput
                  type="number"
                  placeholder="배율 ex) 0.8 = 점수의 80%"
                  value={targetPercentage}
                  onChange={handleInputPercentage}
                  disabled={isDisabled}
                ></PercentageInput>
                {showTooltipAtPercentageInput && isDisabled && (
                  <Tooltip>패치리스트를 더 이상 등록할 수 없습니다.</Tooltip>
                )}
              </div>
            </SecondTitleContainer>
          </InputContainer>
          <div
            onMouseEnter={mouseEnterInDisabledAtApplyButton}
            onMouseLeave={mouseLeaveInDisabledAtApplyButton}
          >
            <Apply
              onClick={(e) => {
                e.stopPropagation();
                apply();
              }}
              disabled={isDisabled}
              title={
                isDisabled ? '패치리스트를 더이상 등록할 수 없습니다.' : ''
              }
            >
              적용
            </Apply>
            {showTooltipAtApplyButton && isDisabled && (
              <Tooltip>패치리스트를 더 이상 등록할 수 없습니다.</Tooltip>
            )}
          </div>
        </PatchContainer>
        <AppliedPatchContainer>
          <AppliedPatch>적용된 패치</AppliedPatch>
          <SubjectContainer>
            <Subject1>소환사 닉네임</Subject1>
            <Subject2>패치 비율</Subject2>
          </SubjectContainer>
          {parseList?.map((patch, index) => {
            return (
              <IndivController key={index}>
                <img src={Img.Check} alt="list" />
                <IndivContainer>
                  <AppliedIdContainer>
                    <AppliedId>{patch.id}</AppliedId>
                  </AppliedIdContainer>
                  <AppliedPercentage>
                    {Number(patch.percentage)}
                  </AppliedPercentage>
                  {patch.percentage >= 1 ? (
                    <img
                      src={Img.ScaleUpArrow}
                      alt="scaleUpArrow"
                      style={{ width: '20px', height: '20px' }}
                    />
                  ) : (
                    <img
                      src={Img.ScaleDownArrow}
                      alt="scaleDownArrow"
                      style={{ width: '20px', height: '20px' }}
                    />
                  )}
                  <DeleteAppliedPatch
                    src={Img.Exit}
                    alt="deleteAppliedPatch"
                    onClick={() => {
                      handleDeletePatch(index);
                    }}
                  ></DeleteAppliedPatch>
                </IndivContainer>
              </IndivController>
            );
          })}
        </AppliedPatchContainer>
        <Reset
          src={Img.Reset}
          alt="reset"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm('모든 패치를 초기화하시겠습니까?')) {
              alert('모든 패치를 초기화하였습니다.');
              resetList();
              setTargetKey(0);
            }
          }}
        />
        <Exit src={Img.Exit} alt="exit" onClick={onClose}></Exit>
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

  &:disabled {
    background-color: #8c8c8c;
    cursor: not-allowed;
  }
`;

const PlayerInput = styled.input`
  width: 200px;
  height: 36px;

  margin: 10px;
  font-size: 16px;

  border: 1px solid #79cfef;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;

  &:disabled {
    background-color: #8c8c8c;
    cursor: not-allowed;
    border-radius: 8px;
  }
`;
const PercentageInput = styled.input`
  width: 200px;
  height: 36px;

  margin: 10px;
  font-size: 16px;

  border: 1px solid #79cfef;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;

  &:disabled {
    background-color: #8c8c8c;
    cursor: not-allowed;
    border-radius: 8px;
  }
`;

const AppliedPatchContainer = styled.div``;

const SubjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Subject1 = styled.div`
  display: flex;
  position: relative;
  right: 15px;

  font-size: 20px;
  font-weight: bold;
`;

const Subject2 = styled.div`
  display: flex;
  position: relative;
  right: 115px;

  font-size: 20px;
  font-weight: bold;
`;

const AppliedPatch = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin: 50px 0 20px 50px;
`;

const IndivController = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;

  & > img {
    width: 20px;
    height: 20px;
  }
`;

const IndivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 10px;
`;

const AppliedIdContainer = styled.div`
  display: flex;
  margin: 5px 10px 0 10px;
  text-align: left;
  width: 150px;
`;

const AppliedId = styled.div`
  width: 100%;
  max-width: 100%;
  word-wrap: break-word;
  white-space: normal;
`;

const AppliedPercentage = styled.div`
  display: flex;
  margin: 5px 10px 0 10px;
  text-align: left;
  width: 20px;
`;

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

const Tooltip = styled.div`
  position: absolute;
  z-index: 1;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

export default Controller;
