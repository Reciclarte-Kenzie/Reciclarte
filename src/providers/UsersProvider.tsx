import { createContext } from "react";

export const UserContext = createContext({});

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
