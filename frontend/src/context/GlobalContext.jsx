import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isReload, setIsReload] = useState(false);
  const [usersCount, setUsersCount] = useState(6);

  const triggerReload = () => {
    setIsReload(true);
    setTimeout(() => setIsReload(false), 100);
  };

  const value = {
    isReload,
    setIsReload,
    triggerReload,
    usersCount,
    setUsersCount,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export { GlobalContext };
