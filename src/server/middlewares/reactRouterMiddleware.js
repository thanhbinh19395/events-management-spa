import { matchRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import createMemoryHistory from 'history/createMemoryHistory';

import configureStore from '../../shared/modules/configureStore';
import routes from '../../shared/routes';
import renderer from '../helpers/renderer';

// TODO: Use Redis to cache the HTML/Assets to reduce cost render from Server on every request
export default (req, res) => {
  const branch = matchRoutes(routes, req.path);
  const memoryHistory = createMemoryHistory({ initialEntries: [req.url] });
  const { store, observableEpics } = configureStore(memoryHistory, {
    isServerSide: true,
    apiBaseUrl: process.env.API_BASE_URL,
    initState: {},
    initialQueryParams: serialize(req.query, { isJSON: true }),
  });

  const promises = branch.map(({ route, match }) => (route.loadData
    ? route.loadData({
      state: store.getState(),
      dispatch: store.dispatch,
      match,
    })
    : Promise.resolve(null)));

  Promise.all(promises).then(() => {
    const context = {};
    renderer(req, res,
      {
        history: memoryHistory,
        store,
        context,
        observableEpics,
      });
  });
};
