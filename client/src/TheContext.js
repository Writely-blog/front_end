import { createContext } from 'react';

export const TheContext = createContext();

const TheContextProvider = ({ children }) => {
  return <TheContext.Provider>{children}</TheContext.Provider>;
};

export default TheContextProvider;
