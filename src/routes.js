import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout, LoginRegisterLayout } from './layouts';

// Route Views
import UserProfileLite from './views/UserProfileLite';

export default [
  {
    path: '/',
    exact: true,
    layout: LoginRegisterLayout,
    component: () => <Redirect to='/login' />
  },
  {
    path: '/user-profile',
    layout: DefaultLayout,
    component: UserProfileLite
  },
];
