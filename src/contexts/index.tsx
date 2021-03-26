import React, { createContext, SetStateAction, useContext, useState } from 'react';
import moment from 'moment';

import useLocalStorage from 'hooks/useLocalStorage';
import { DEFAULT_LANGUAGE } from 'Constants';
import { User } from 'types/User';

interface StateContextType {
  user: User | null;
  accessToken: string;
  isAuthenticated: boolean;

  setUser: React.Dispatch<SetStateAction<User | null>>;
  setAccessToken: React.Dispatch<SetStateAction<string | null>>;
}

export const StateContext = createContext<StateContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function AppStateProvider({ children }: Props) {
  const currentLocale = localStorage.getItem('lng');
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);
  moment.locale(currentLocale || DEFAULT_LANGUAGE);

  const isAuthenticated = !!accessToken && !!user;

  const contextValue = {
    isAuthenticated,
    accessToken,
    setAccessToken,
    user,
    setUser,
  } as StateContextType;

  return <StateContext.Provider value={{ ...contextValue }}>{children}</StateContext.Provider>;
}

export function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppStateProvider');
  }
  return context;
}
