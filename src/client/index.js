import React from 'react';
import { hydrate } from 'react-dom';

import Application from '../shared/App';

hydrate(
  <Application/>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}