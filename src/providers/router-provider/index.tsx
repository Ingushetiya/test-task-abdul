import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Main } from '../../components/pages/main';
import { AuthPage } from '../../components/auth';
import { RoutesPath } from './router-provider.constants';
import { useAppSelector } from '../../hooks/app-use-selector';

export const RouterProvider = () => {
  const token = useAppSelector((state) => state.authReducer.token);

  return (
    <BrowserRouter>
      {!token ? (
        <Routes>
          <Route path={RoutesPath.Auth} element={<AuthPage />} />
          <Route path={RoutesPath.Main} element={<Navigate to={RoutesPath.Auth} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={RoutesPath.Auth} element={<Navigate to={RoutesPath.Main} replace />} />
          <Route path={RoutesPath.Main} element={<Main />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
