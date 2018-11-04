import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext }) => {
  staticContext.notFound = true; // eslint-disable-line no-param-reassign
  return <h1>Ooops, route not found.</h1>;
};

NotFoundPage.defaultProps = {
  staticContext: {},
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
};

export default {
  component: NotFoundPage,
};
