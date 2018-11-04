import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUserListStart } from './UserListPage.actions';

class UsersListPage extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchUserListStart();
    }
  }

  renderUsers() {
    return this.props.data.map(user => <li key={user.id}>{user.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.data.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        { this.props.error && <div>ERROR</div>}
        {
          !this.props.error && (
          <div>
            <p>Here is a big list of users:</p>
            <ul>{this.renderUsers()}</ul>
          </div>
          )
        }
      </div>
    );
  }
}

UsersListPage.defaultProps = {
  error: null,
};

UsersListPage.propTypes = {
  error: PropTypes.object,
  loaded: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  fetchUserListStart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { ...state.userList };
}

const ConnectedUserListPage = connect(
  mapStateToProps,
  { fetchUserListStart },
)(UsersListPage);


function loadData({ dispatch }) {
  return dispatch(fetchUserListStart());
}

export default {
  loadData,
  component: ConnectedUserListPage,
};
