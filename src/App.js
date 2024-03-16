import './App.css';
import React from 'react';
import Layout from './Layout';
import ScaleProvider from './context/ScaleContext';

function App() {
  return (
    <ScaleProvider>
      <Layout />
    </ScaleProvider>
  );
}

/* 
  1. 전적 갱신 버튼 구현해야함. [?]
  2. UI 업그레이드 [진행중]
  3. 더보기 (API 연결한 후 작업할것.) [?]
  4. 먹꾸 어케하노? (Fetch loading) [?]
  5. 디테일 아이템 추가 [?]
  6. useQuery 업그레이드
  7. Modal 이 많다고 가정했을때 컴포넌트화 시키기 [?]

------------------------------------------------------------------------

  **. sessionStorage 연결 [필]

  **. penalty, advanatge에도 id값 validation 있어야 할까? [나중에]
  **. tooltip... 이게 최선..? [useState를 true,false 말고 type으로 지정]
  **. useContext [공부할것]
  **. 자식에서 부모로 props 끌어올리기 [공부할것]
*/

export default App;
