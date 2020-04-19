import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout, LoginRegisterLayout } from './layouts';

// Route Views
import UserProfileLite from './views/UserProfileLite';
import Login from './views/Login';

export default [
  {
    path: '/',
    exact: true,
    layout: LoginRegisterLayout,
    component: () => <Redirect to='/login' />
  },
  {
    path: '/login',
    layout: LoginRegisterLayout,
    component: Login
  },
  {
    path: '/user-profile',
    layout: DefaultLayout,
    component: UserProfileLite
  },
];
