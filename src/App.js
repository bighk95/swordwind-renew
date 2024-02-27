import './App.css';
import Main from './Main';
import styled from 'styled-components';

const StyledCopyright = styled.a`
  position: relative;
  bottom: 0;
  left: 0;
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

function App() {
  return (
    <div className="App">
      <Main></Main>
      <StyledCopyright href="https://kr.freepik.com/search?format=search&last_filter=type&last_value=icon&query=down+arrow+&type=icon">
        wahya 제작 아이콘
      </StyledCopyright>
    </div>
  );
}

export default App;
