import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFound>
      <div>현재 요청하신 페이지를 찾을 수 없습니다.</div>
      <div>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</div>
      <div>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 80px;

  & > div {
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
  }

  & > button {
    width: 100px;
    height: 40px;
    margin: 0 auto;
    margin-top: 20px;

    background-color: #eeeeee;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
      background-color: #c5c5c5;
    }
  }
`;

export default NotFound;
