import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppState } from 'contexts';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getUser } from 'redux/actions/Authorization';
import LoadingView from 'components/Loading';

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { accessToken, user, setUser } = useAppState();
  const { authorizationLoading } = useStateSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) dispatch(getUser(setUser));
  }, [accessToken, dispatch, setUser]);

  if (authorizationLoading) return <LoadingView />;

  if (accessToken && !user) return null;

  return children;
};

export default UserProvider;
