import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppState } from 'contexts';
import { getUser } from 'redux/actions/AuthorizationActions';

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { accessToken, user, setUser } = useAppState();

  useEffect(() => {
    if (accessToken) dispatch(getUser(setUser));
  }, [accessToken]);

  if (accessToken && !user) {
    return null;
  }

  return children;
};

export default UserProvider;
