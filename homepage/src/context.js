import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [test, setTest] = useState();
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider, AppContext };
