import { createContext } from 'react';

export const TheContext = createContext();

const TheContextProvider = ({ children }) => {
  const a = 1;
  return <TheContext.Provider value={a}>{children}</TheContext.Provider>;
};

export default TheContextProvider;
