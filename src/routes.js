import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';

// Route Views
import UserProfileLite from './views/UserProfileLite';

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to='/user-profile' />
  },
  {
    path: '/user-profile',
    layout: DefaultLayout,
    component: UserProfileLite
  },
];
