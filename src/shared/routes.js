import App from './App';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

import {
  // asyncComponent,
  makeRouteConfig,
} from './helpers';

const routes = [
  {
    component: App,
    path: parentRoute => `${parentRoute}/`,
    routes: [
      {
        path: parentRoute => `${parentRoute}/about`,
        exact: true,
        component: AboutPage,
        // component: asyncComponent(() => import('./pages/AboutPage')),
      },
      {
        path: parentRoute => `${parentRoute}/blog`,
        exact: true,
        component: BlogPage,
      },
    ],
  },
];

export default makeRouteConfig(routes);


