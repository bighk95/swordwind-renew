import './App.css';
import React, { useEffect } from 'react';
import Layout from './Layout';
import ScaleProvider from './context/ScaleContext';
import { search } from './api/summoner';

function App() {
  useEffect(() => {
    search();
  }, []);

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

  **. sessionStorage 연결 [완]
  **. NotFound css [완]
  **. error처리 어떻게 해야할까? [?]
  **. 새로고침했을시 유저 검색한 페이지에 남아있을것. [완]
  **. 데이터가 몇개가 error가 나면 정상적인 데이터도 출력되지 않는 현상 [?]
  **. 닉네임 또는 태그네임에 대문자가 들어가면 검색되지 않는현상 !!!!!! [완]
  **. penalty, advanatge에도 id값 validation 있어야 할까? [나중에]
  **. tooltip... 이게 최선..? [useState를 true,false 말고 type으로 지정]
  **. useContext [공부할것]
  **. 자식에서 부모로 props 끌어올리기 [공부할것]
*/

export default App;
