import React, { createContext, SetStateAction, useContext } from 'react';
import moment from 'moment';

import useLocalStorage from 'hooks/useLocalStorage';
import Constants from 'Constants';

interface StateContextType {
  accessToken: string;
  isAuthenticated: boolean;

  setAccessToken: React.Dispatch<SetStateAction<string | null>>;
}

export const StateContext = createContext<StateContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function AppStateProvider({ children }: Props) {
  const currentLocale = localStorage.getItem('lng');
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);
  moment.locale(currentLocale || Constants.DEFAULT_LANGUAGE);

  const isAuthenticated = !!accessToken;

  const contextValue = {
    isAuthenticated,
    accessToken,
    setAccessToken,
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
