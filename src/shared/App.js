import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { StaticRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';
import routes from './routes';

class Application extends PureComponent {
  render() {
    const { store, history, isServerSide, location, routerContext, i18n } = this.props;
    const Router = isServerSide ? StaticRouter : ConnectedRouter;
    const routeProps = isServerSide ? { location, context: routerContext } : { location };
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router history={history} {...routeProps}>
            <Switch>{renderRoutes(routes)}</Switch>
          </Router>
        </I18nextProvider>
      </Provider>
    );
  }
}

Application.defaultProps = {
  isServerSide: false,
};

Application.propTypes = {
  isServerSide: PropTypes.bool,
};

export default Application;
