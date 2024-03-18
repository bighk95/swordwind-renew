import React, { useEffect, useState } from 'react';

// 컨텍스트 생성
export const ScaleContext = React.createContext();

/**
 * scale  상태관리
 * add 스케일 추가
 * remove 스케일 제거
 */
const ScaleProvider = ({ children }) => {
  const [scaleList, setScaleList] = useState(
    sessionStorage.getItem('list') || [],
  );
  const sessionPatch = window.sessionStorage;
  const list = sessionStorage.getItem('patch');
  const parseList = JSON.parse(list);
  const scaleMap = {};

  useEffect(() => {
    scaleList?.forEach((scale) => {
      Object.defineProperty(scaleMap, scale.id.toLowerCase(), {
        value: parseFloat(scale.percentage),
        writable: true,
      });
    });
  }, [parseList]);

  const addList = (scale) => {
    setScaleList((prevList) => {
      const newList = [...prevList, { ...scale }];
      const stringfy = JSON.stringify(newList);
      sessionPatch.setItem('patch', stringfy);
      return newList;
    });
  };

  const removeList = (index) => {
    setScaleList((prevList) => {
      const newList = prevList.filter((item, idx) => index !== idx);
      const stringfy = JSON.stringify(newList);
      sessionPatch.setItem('patch', stringfy);
      return newList;
    });
  };

  const resetList = () => {
    setScaleList([]);
    sessionPatch.clear();
  };

  return (
    <ScaleContext.Provider
      value={{
        scaleList,
        scaleMap,
        parseList,
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
