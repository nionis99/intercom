import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppState } from 'contexts';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getPlaces } from 'redux/actions/Place';
import { getUser } from 'redux/actions/Authorization';
import LoadingView from 'components/Loading';

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { accessToken, user, setUser } = useAppState();
  const { authorizationLoading } = useStateSelector((state) => state.auth);
  const { placeLoading } = useStateSelector((state) => state.place);

  useEffect(() => {
    if (accessToken) dispatch(getUser(setUser));
  }, [accessToken, dispatch, setUser]);

  useEffect(() => {
    if (accessToken && user) dispatch(getPlaces());
  }, [accessToken, dispatch, user]);

  if (authorizationLoading) {
    return (
      <div className="d-flex w-100 vh-100">
        <LoadingView />
      </div>
    );
  }

  if (accessToken && !user) return null;

  return children;
};

export default UserProvider;
