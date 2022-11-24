import React, { createContext, useState, useEffect } from "react";

import apiCall from "../api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const dataApi = await apiCall.fetch();
      setData(dataApi);
    };
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
