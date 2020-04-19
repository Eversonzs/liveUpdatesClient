import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout, LoginRegisterLayout } from './layouts';

// Route Views
import Login from './views/Login';
import Register from './views/Register';
import UserProfileLite from './views/UserProfileLite';
import NewsBlog from './views/NewsBlog';
import Logout from './views/Logout';

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
  {
    path: '/news-blog',
    layout: DefaultLayout,
    component: NewsBlog
  },
  {
    path: '/logout',
    layout: DefaultLayout,
    component: Logout
  },
  {
    path: '*',
    exact: true,
    layout: LoginRegisterLayout,
    component: () => <Redirect to='/login' />
  },
];
