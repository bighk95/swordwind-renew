import React from 'react';
import styled, { keyframes } from 'styled-components';

// 회전 애니메이션 정의
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const boxRotate = keyframes`
from {
  transform: rotate(360deg);
}
to {
  transform: rotate(0deg);
}
`;

// 로더 컴포넌트 스타일링
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100px;
  height: 100px;
  animation: ${boxRotate} 2s linear infinite;

  border: 1px solid white;
  border-radius: 12px;

  margin: 0 auto;
`;

const StyledLoader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  z-index: 10;
`;

// 로딩 애니메이션을 보여주는 컴포넌트
const Loader = () => {
  return (
    <>
      <Container>
        <StyledLoader />
        <StyledLoaderContainer></StyledLoaderContainer>
      </Container>
    </>
  );
};

export default Loader;
