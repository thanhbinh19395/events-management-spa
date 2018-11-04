import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userListPageReducers from '../pages/UserListPage.reducers';

const configReducer = (state = {}) => state;

export default history => combineReducers({
  router: connectRouter(history),
  config: configReducer,
  ...userListPageReducers,
});
