import './App.css';
import React from 'react';
import Layout from './Layout';
function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

/* 
  1. 핸디캡 / 어드밴티지 구현 (새로고침) [?]
  2. 전적 갱신 버튼 구현해야함. [?]
  3. UI 업그레이드 [진행중]
  4. 더보기 (API 연결한 후 작업할것.) [?]
  5. 먹꾸 어케하노? (Fetch loading) [?]
  6. 디테일 아이템 추가 [?]
  7. useQuery 업그레이드

  **. penalty, advanatge에도 id값 validation 있어야 할까? [나중에]
  **. tag 없을때의 validation err [완]
  **. appliedPatch.length 기준 초과시 적용 안되게 하고싶음. [완]
  **. 이미 적용된 패치가 있을시에 중복 불가능 [완]
  **. 툴팁 너무어렵다.. 꼭 만들어야하나? [완]
  **. 닉네임에 들어가면 안되는 문자 ([];,./?!@#$%^&*()_+) validation 필요.
  **. percetage(e123123123) 예외처리.
  **. targetId가 너무 긴경우 줄넘김처리.
  **. #이 1개 이상일때의 validation / #뒤에 공백일때의 validation
  **. tooltip... 이게 최선..?
*/

export default App;
