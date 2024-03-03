import React from 'react';
import styled from 'styled-components';

const Controller = ({ onClose }) => {
  return (
    <StyledControllerContainer onClick={(e) => e.stopPropagation()}>
      <StyledController>밸런스 패치 내용</StyledController>
      <StyledControllerAllowedButton onClick={onClose}>
        저장
      </StyledControllerAllowedButton>
      <StyledControllerDisallowedButton onClick={onClose}>
        취소
      </StyledControllerDisallowedButton>
    </StyledControllerContainer>
  );
};

const StyledControllerContainer = styled.div`
  width: 300px;
  height: 300px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const StyledController = styled.div``;

const StyledControllerAllowedButton = styled.button``;

const StyledControllerDisallowedButton = styled.button``;

export default Controller;
