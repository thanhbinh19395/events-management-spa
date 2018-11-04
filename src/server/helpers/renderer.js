import React from 'react';
import { renderToString } from 'react-redux-epic';
import { renderToNodeStream } from 'react-dom/server';

import Application from '../../shared/App';
import Html from './Html';

export default (req, res, { store, context, observableEpics, history }) => {
  renderToString(
    (<Application
      store={store}
      routerContext={context}
      location={req.path}
      history={history}
      isServerSide
    />),
    observableEpics,
    /* eslint-disable-next-line consistent-return */
  ).subscribe(({ markup }) => {
    const scripts = [
      res.locals.assetPath('bundle.js'),
      res.locals.assetPath('vendor.js'),
    ].filter(Boolean);
    const stylesheets = [
      res.locals.assetPath('bundle.css'),
      res.locals.assetPath('vendor.css'),
    ];
    const html = renderToNodeStream(
      <Html
        styles={stylesheets}
        js={scripts}
        component={markup}
        state={store.getState()}
      />,
    );

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.status(200);
    res.type('html');
    res.write('<!doctype html>');

    html.pipe(res);
  });
};
