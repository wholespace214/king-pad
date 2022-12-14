import React, { createContext, useState, useContext, useEffect } from 'react';
import { localStorageGet, localStorageSet } from '../Utils/LocalStorage';

interface StoreContextProps {
  page: number;
  setPage: (value: number) => void;
  isMode: string;
  setMode: (value: string) => void;
}

interface propsType {
  children: React.ReactNode;
}

const StoreContext = createContext<StoreContextProps | null>(null);

const StoreProvider = (props: propsType) => {
  const [page, setPage] = useState<number>(localStorageGet('page'));
  const [isMode, setMode] = useState<string>(localStorageGet('colorMode'));

  const loadPage = () => {
    setPage(localStorageGet('page') === '' ? 0 : localStorageGet('page'));
  };

  const loadMode = () => {
    setPage(localStorageGet('colorMode') === '' ? 'light' : localStorageGet('colorMode'));
  };

  const setPageNumber = (num: number) => {
    setPage(num);
    localStorageSet('page', num);
  };

  const setColorMode = (val: string) => {
    setMode(val);
    localStorageSet('colorMode', val);
  };

  useEffect(() => {
    loadMode();
    loadPage();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        page,
        setPage: setPageNumber,
        isMode,
        setMode: setColorMode
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
