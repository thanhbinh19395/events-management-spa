import React from 'react';
import { hydrate } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { I18nextProvider } from 'react-i18next';
import i18n from './configuration/i18next';

import Application from '../shared/App';
import configureStore from '../shared/modules/configureStore';

const history = createBrowserHistory();
const { store } = configureStore(history, {
  isServerSide: false,
  apiBaseUrl: process.env.PROXY_API_ROUTE,
});

hydrate(
  <I18nextProvider i18n={i18n}>
    <Application
      store={store}
      history={history}
    />
  </I18nextProvider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
