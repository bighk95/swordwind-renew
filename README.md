# Swordwind-renew

**배포 링크 : https://bighk95.github.io/swordwind-renew**

칼바람 나락 플레이어별 기여도를 산정하여 순위를 책정합니다.

## 기능명세

### 메인페이지

<img width="862" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/1a965553-e4cd-46a8-a523-cf9682261b3b">

- 플레어어의 ID, TAG를 입력받아서 검색을 실행합니다.
- 실력차이가 많이 나는 경우, 좌하단의 밸런스 패치 모달을 통해서 페널티, 어드밴티지를 임의대로 적용할 수 있습니다.

---

### 검색페이지

<img width="864" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/71f7afc9-a9d1-4b7f-8aa2-3d8cd403ea65">

- 플레이어가 포함된 팀이 승리하였는지, 패배하였는지 데이터를 받아서 백그라운드를 다르게 설정하였습니다.
- 플레이어의 딜량, 힐량, 탱량 데이터를 받아서 종합적으로 산정한 점수를 간단하게 보여주고, 점수 순서대로 나열합니다.

---

<img width="865" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/cdeeb037-698e-46dc-bfc0-4dc26723a920">

- 산정한 점수의 딜량, 힐량, 탱량의 자세한 지표를 볼수 있습니다.

---

<img width="865" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/969a9eb2-143c-40ed-81a6-7d665ca87c23">

- 유저의 ID, TAG를 입력하면 해당 유저에게 페널티, 어드밴티지를 적용할 수 있습니다.

---

<img width="864" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/086581b8-2140-4d2e-913d-7da64c692ef6">

- 적용되어있는 패치 내역을 한눈에 볼 수 있으며, 1( 100% )을 기준으로 페널티, 어드밴티지를 확인할 수 있게 화살표를 추가하여 편의성을 개선하였습니다.

- 적용되어있는 패치 내역을 개별삭제, 일괄삭제 할 수 있습니다.

---

<img width="886" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/65313088-5285-451c-a8bd-15e50fdad07c">

- 새로고침 없이 변화된 결과값을 실시간으로 적용, 적용해제하여 유저끼리 더 재밌게 플레이 할 수 있도록 하였습니다.

- 세션 스토리지를 연결하여 새로고침 하거나 다른 플레이어를 검색하여도 적용된 패치가 남아있도록 하였습니다.

---

<img width="868" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/108f1fd0-8fd4-477a-aff3-30c6daf3a3c8">

<img width="864" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/8291fa99-8e05-4f77-b97c-8155d3b23429">

<img width="866" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/63198fa9-8356-4605-8ada-76a061e97d1a">

- 해당 유저가 실제로 존재하는 유저이지만, 데이터가 없는 경우 전적 갱신을 하여 데이터를 받아오도록 하였습니다.

---

<img width="865" alt="image" src="https://github.com/bighk95/swordwind-renew/assets/117927349/e9ea43e1-2526-4be0-8ea1-97fd5ee74212">

- 해당 유저가 실제로 존재하지 않는 유저라면, ID 및 TAG 를 확인하도록 하였습니다.

---

## 
