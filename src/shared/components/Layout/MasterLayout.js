import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

class MasterLayout extends PureComponent {
  render() {
    const { route } = this.props;
    return (
      <div className="master-layout">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>{renderRoutes(route.routes)}</Switch>
        <h4>&copy; 2018 - Thuong Nguyen</h4>
      </div>
    );
  }
}

MasterLayout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default MasterLayout;
