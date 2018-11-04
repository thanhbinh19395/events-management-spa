import React from 'react';
import { Redirect } from 'react-router-dom';
import MasterLayout from './components/Layout/MasterLayout';
import AboutPage from './pages/AboutPage';
import UserListPage from './pages/UserListPage.container';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    component: MasterLayout,
    path: '/',
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage.component,
      },
      {
        path: '/users',
        exact: true,
        component: UserListPage.component,
        loadData: UserListPage.loadData,
      },
      {
        path: '/about',
        exact: true,
        component: AboutPage.component,
        loadData: AboutPage.loadData,
      },
      {
        path: '/redirect',
        exact: true,
        component: () => (<Redirect to="/users" />),
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

export default routes;
