import React, { createContext, SetStateAction, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppState } from 'contexts';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getPlaces } from 'redux/actions/Place';
import { getUser } from 'redux/actions/Authorization';
import useLocalStorage from 'hooks/useLocalStorage';
import LoadingView from 'components/Loading';

interface UserStateContextType {
  selectedProject: string | null;
  selectedAddress: string | null;
  selectedHouse: string | null;
  selectedFlat: string | null;
  setSelectedProject: React.Dispatch<SetStateAction<string | null>>;
  setSelectedAddress: React.Dispatch<SetStateAction<string | null>>;
  setSelectedHouse: React.Dispatch<SetStateAction<string | null>>;
  setSelectedFlat: React.Dispatch<SetStateAction<string | null>>;
}

export const UserStateContext = createContext<UserStateContextType | null>(null);

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { accessToken, user, setUser } = useAppState();
  const { authorizationLoading } = useStateSelector((state) => state.auth);
  const { placeLoading } = useStateSelector((state) => state.place);
  const [selectedProject, setSelectedProject] = useLocalStorage('project', '');
  const [selectedAddress, setSelectedAddress] = useLocalStorage('address', null);
  const [selectedHouse, setSelectedHouse] = useLocalStorage('house', null);
  const [selectedFlat, setSelectedFlat] = useLocalStorage('flat', null);

  useEffect(() => {
    if (accessToken) dispatch(getUser(setUser));
  }, [accessToken, dispatch, setUser]);

  useEffect(() => {
    if (accessToken && user) dispatch(getPlaces());
  }, [accessToken, dispatch, user]);

  if (authorizationLoading || placeLoading) {
    return (
      <div className="d-flex w-100 vh-100">
        <LoadingView />
      </div>
    );
  }

  if (accessToken && !user) return null;

  const contextValue = {
    selectedProject,
    selectedAddress,
    selectedHouse,
    selectedFlat,
    setSelectedProject,
    setSelectedAddress,
    setSelectedHouse,
    setSelectedFlat,
  } as UserStateContextType;

  return <UserStateContext.Provider value={{ ...contextValue }}>{children}</UserStateContext.Provider>;
};

export function useUserState() {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error('useUserState must be used within the UserStateProvider');
  }
  return context;
}

export default UserProvider;
