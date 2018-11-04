import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

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
    return (
      <div>
        {this.head()}
        Welcome to Events Management SPA
      </div>
    );
  }
}

HomePage.propTypes = {};

export default {
  component: HomePage,
};
