import React, { useEffect, useState } from 'react';

export const ScaleContext = React.createContext();

const ScaleProvider = ({ children }) => {
  const [scaleList, setScaleList] = useState(
    JSON.parse(sessionStorage.getItem('patch') || '[]'),
  );
  const [scaleMap, setScaleMap] = useState({});

  useEffect(() => {
    let mapdata = {};
    scaleList?.forEach((scale) => {
      Object.defineProperty(mapdata, scale.id.toLowerCase(), {
        value: parseFloat(scale.percentage),
        writable: true,
      });
    });

    setScaleMap(mapdata);
  }, [scaleList.length]);

  const addList = (scale) => {
    setScaleList((prevList) => {
      const newList = [...prevList, { ...scale }];
      const stringfy = JSON.stringify(newList);
      sessionStorage.setItem('patch', stringfy);
      return newList;
    });
  };

  const removeList = (index) => {
    setScaleList((prevList) => {
      const newList = prevList.filter((item, idx) => index !== idx);
      const stringfy = JSON.stringify(newList);
      sessionStorage.setItem('patch', stringfy);
      return newList;
    });
  };

  const resetList = () => {
    setScaleList([]);
    sessionStorage.clear();
  };

  return (
    <ScaleContext.Provider
      value={{
        scaleList,
        scaleMap,
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
