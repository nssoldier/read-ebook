import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import HomeHeader from "./HomeHeader";

const propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const defaultProps = {
  categoriesTree: []
};

const HomeHeaderContainer = props => {
  const authenticated = useSelector(
    state => state.authentication.authenticated
  );
  return <HomeHeader {...props} authenticated={authenticated} />;
};

HomeHeaderContainer.propTypes = propTypes;

HomeHeaderContainer.defaultProps = defaultProps;

export default withRouter(HomeHeaderContainer);
