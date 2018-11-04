import MasterLayout from './components/Layout/MasterLayout';
import AboutPage from './pages/AboutPage';
import UserListPage from './pages/UserListPage.container';
import HomePage from './pages/HomePage';

import {
  // asyncComponent,
  makeRouteConfig,
} from './helpers';

const routes = [
  {
    component: MasterLayout,
    path: parentRoute => `${parentRoute}/`,
    routes: [
      {
        path: parentRoute => `${parentRoute}/`,
        exact: true,
        component: HomePage.component,
      },
      {
        path: parentRoute => `${parentRoute}/users`,
        exact: true,
        component: UserListPage.component,
        loadData: UserListPage.loadData,
      },
      {
        path: parentRoute => `${parentRoute}/about`,
        exact: true,
        component: AboutPage.component,
        loadData: AboutPage.loadData,
      },
    ],
  },
];

export default makeRouteConfig(routes);
