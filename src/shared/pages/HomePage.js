import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

class HomePage extends PureComponent {
  head() {
    return (
      <Helmet>
        <title>Home Page Title</title>
        <meta property="og:title" content="Home Page Title" />
      </Helmet>
    );
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        {this.head()}
        <h2>{t('title')}</h2>
        Welcome to Events Management SPA
      </div>
    );
  }
}

HomePage.propTypes = {
  t: PropTypes.any.isRequired,
};

export default {
  component: withNamespaces()(HomePage),
};
