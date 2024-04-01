import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(50% - 50px);
  z-index: 100;

  margin-top: 10px;
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
  border: 6px solid #d0d0d0;
  border-top: 6px solid #0083db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  z-index: 10;
`;

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
