import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { actions } from "../../authentication/store";
import HomeLayout from "./HomeLayout";

const propTypes = {
  location: PropTypes.shape({}).isRequired,

  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

const defaultProps = {
  children: undefined
};

const HomeLayoutContainer = ({ children, location }) => {
  const { authenticated } = useSelector(state => state.authentication);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <HomeLayout
      authenticated={authenticated}
      location={location}
      logout={logout}
    >
      {children}
    </HomeLayout>
  );
};

HomeLayoutContainer.propTypes = propTypes;

HomeLayoutContainer.defaultProps = defaultProps;

export default withRouter(HomeLayoutContainer);
