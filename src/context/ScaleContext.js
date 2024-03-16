import React, { useState } from 'react';

// 컨텍스트 생성
export const ScaleContext = React.createContext();

/**
 * scale  상태관리
 * add 스케일 추가
 * remove 스케일 제거
 */
const ScaleProvider = ({ children }) => {
  const [scaleList, setScaleList] = useState([]);

  const addList = (scale) => {
    setScaleList((prevList) => [...prevList, { ...scale }]);
  };

  const removeList = (index) => {
    setScaleList((prevList) => prevList.filter((item, idx) => index !== idx));
  };

  const resetList = () => {
    setScaleList([]);
  };

  return (
    <ScaleContext.Provider
      value={{
        scaleList,
        addList,
        removeList,
        resetList,
      }}
    >
      {children}
    </ScaleContext.Provider>
  );
};

export default ScaleProvider;
