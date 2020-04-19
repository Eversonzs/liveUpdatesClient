import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout, LoginRegisterLayout } from './layouts';

// Route Views
import UserProfileLite from './views/UserProfileLite';
import Login from './views/Login';
import Register from './views/Register';

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
    path: '/register',
    layout: LoginRegisterLayout,
    component: Register
  },
  {
    path: '/user-profile',
    layout: DefaultLayout,
    component: UserProfileLite
  },
  /* {
    path: '*',
    exact: true,
    layout: LoginRegisterLayout,
    component: () => <Redirect to='/login' />
  }, */
];
