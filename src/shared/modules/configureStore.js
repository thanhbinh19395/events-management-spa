import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import { createEpicMiddleware } from 'redux-observable';
import { wrapRootEpic } from 'react-redux-epic';
import { routerMiddleware } from 'connected-react-router';
import combinedEpics from './rootEpics';
import createRootReducers from './reducers';

const createAxiosInstance = (isServerInstance, config) => {
  const axiosConfig = { baseURL: config.apiBaseUrl };

  if (isServerInstance) {
    Object.assign(axiosConfig, {
      headers: { cookie: config.config || '' },
    });
  }

  return axios.create(axiosConfig);
};


const getInitialState = ({ isServerSide, initialQueryParams }) => {
  const parsedQueryParams = initialQueryParams ? JSON.parse(initialQueryParams) : {};
  if (isServerSide) {
    return {
      config: { initialQueryParams: parsedQueryParams },
    };
  }

  let initialState = {};
  if (typeof window !== 'undefined') {
    initialState = window.INITIAL_STATE;
    delete window.INITIAL_STATE;
  }

  return initialState;
};

export default (history, config = {}) => {
  const {
    isServerSide = false,
    apiBaseUrl,
    cookie,
    initialQueryParams,
  } = config;

  const axiosInstance = createAxiosInstance(isServerSide, { apiBaseUrl, cookie });

  let observableEpics;
  let rootEpics = combinedEpics;
  if (isServerSide) {
    rootEpics = wrapRootEpic(combinedEpics);
    observableEpics = rootEpics;
  }

  const epicMiddleware = createEpicMiddleware(rootEpics, {
    dependencies: {
      axios: axiosInstance,
    },
  });

  const rootReducers = createRootReducers(history);
  const initialState = getInitialState({ isServerSide, initialQueryParams });
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line no-underscore-dangle, max-len
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware, routerMiddleware(history)),
    ),
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default(history); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return {
    store,
    observableEpics,
  };
};
