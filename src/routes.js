import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout, LoginRegisterLayout } from './layouts';

// Route Views
import Login from './views/Login';
import Register from './views/Register';
import UserProfileLite from './views/UserProfileLite';
import NewsBlog from './views/NewsBlog';
import NewPost from './views/NewPost';
import CovidStatistics from './views/CovidStatistics';
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
    path: '/user-profile/:username',
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: '/news-blog',
    layout: DefaultLayout,
    component: NewsBlog
  },
  {
    path: '/new-post',
    layout: DefaultLayout,
    component: NewPost
  },
  {
    path: '/covid-statistics',
    layout: DefaultLayout,
    component: CovidStatistics
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
