import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { StaticRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class Application extends PureComponent {
  render() {
    const { store, history, isServerSide, location, routerContext } = this.props;
    const Router = isServerSide ? StaticRouter : ConnectedRouter;
    const routeProps = isServerSide ? { location, context: routerContext } : { location };
    return (
      <Provider store={store}>
        <Router history={history} {...routeProps}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
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
