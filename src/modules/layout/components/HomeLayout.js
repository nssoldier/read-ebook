import React from "react";
import PropTypes from "prop-types";
import { Layout as AntdLayout } from "antd";
import { css } from "emotion";

import HomePageFooter from "./Footer";
import HomePageHeader from "./HomeHeader.container";

const propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  logout: PropTypes.func.isRequired,

  authenticated: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

const defaultProps = {
  authenticated: false,
  children: undefined
};

const styles = {
  container: css`
    min-height: 100vh;
  `,
  content: css`
    margin-top: 50px;
    background-color: white;
    display: flex;

    @media screen and (max-width: 480px) {
      padding: 20px 50px;
    }
    @media screen and (min-width: 768px) {
      padding: 35px 75px;
    }
    @media screen and (min-width: 992px) {
      padding: 45px 95px;
    }
    @media screen and (min-width: 1200px) {
      padding: 50px 150px;
    }
  `
};

const HomePageLayout = ({ authenticated, children, logout, location }) => (
  <AntdLayout className={styles.container}>
    <HomePageHeader
      authenticated={authenticated}
      logout={logout}
      pathname={location.pathname}
    />
    <AntdLayout.Content className={styles.content}>
      {children}
    </AntdLayout.Content>
    <HomePageFooter />
  </AntdLayout>
);

HomePageLayout.propTypes = propTypes;

HomePageLayout.defaultProps = defaultProps;

export default HomePageLayout;
