import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';

const Header = ({
  handleSearch,
  handleUpdate,
  message,
  setMessage,
  setMatches,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);
  const name = searchParams.get('name');

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.value = name || '';
  }, [name]);

  return (
    <div>
      <Container>
        <Title
          to="/"
          onClick={() => {
            inputRef.current.value = '';
            setMatches([]);
            setMessage('');
          }}
        >
          <h1>칼바람 나락 기여도 랭킹</h1>
        </Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSearch}>
            <Input
              ref={inputRef}
              type="text"
              name="name"
              placeholder="소환사 이름 + #KR1"
              defaultValue={name}
            ></Input>
            <Button type="submit">검색</Button>
          </form>
          <form onSubmit={handleUpdate}>
            <Button type="submit">전적갱신</Button>
          </form>
        </div>

        <span
          className="message"
          style={{
            display: 'inline-block',
            marginTop: '40px',
            fontSize: '24px',
          }}
        >
          {message}
        </span>
      </Container>
    </div>
  );
};

const Title = styled(Link)`
  display: inline-block;
  text-decoration-line: none;
  color: black;
`;

const Container = styled.div`
  padding-top: 30px;
  text-align: center;
`;

const Input = styled.input`
  height: 32px;
  width: 200px;
  text-align: center;
`;

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  position: relative;
  border-radius: 8px;

  font-size: 14px;
  height: 40px;
  width: 80px;
  margin: 0 5px 0 5px;
  background-color: #1e90ff;
  transition: 0.2s ease;

  &:hover {
    background-color: #3e9fff;
  }
`;

export default Header;
