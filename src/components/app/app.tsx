import { RouterProvider } from '../../providers/router-provider';
import { useAppDispatch } from '../../hooks/app-use-dispatch';
import { useEffect } from 'react';
import { login } from '../auth/auth-slice';

export const App = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      dispatch(login(token));
    }
  }, [token, dispatch]);

  return (
    <>
      <RouterProvider />
    </>
  );
};
