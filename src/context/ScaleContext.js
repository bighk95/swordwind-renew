import React, { useEffect, useState } from 'react';

export const ScaleContext = React.createContext();

const ScaleProvider = ({ children }) => {
  const [scaleList, setScaleList] = useState(
    JSON.parse(sessionStorage.getItem('patch') || '[]'),
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
