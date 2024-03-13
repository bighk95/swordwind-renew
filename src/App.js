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
  **. tag 없을때의 validation err [원인찾아라]?? 걍 됐음;;
  **. appliedPatch.length 기준 초과시 적용 안되게 하고싶음. [length를 추가하면 관찰 / 꽉차면 비활성화]
  **. 이미 적용된 패치가 있을시에 중복 불가능.
  **. 왜 map 을 썼는데, = > {} 이 아닌 => () 을 써야하는가? [둘다되는데 {}얘만 내부 로직 구현가능.]
*/

export default App;
