import React from "react";
import PropTypes from "prop-types";
import { Layout, Icon } from "antd";
import { css } from "emotion";
import { Link } from "react-router-dom";

const propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const defaultProps = {};

const styles = {
  header: css`
    position: absolute;
    width: 100%;
    align-items: center;
    display: flex;
    padding: 0 5%;
    background-color: rgba(0, 0, 0, 0.8);
    @media screen and (max-width: 480px) {
      padding: 0 10px;
    }
  `,
  logo: css`
    padding: 0px;
    display: inline;
  `,
  logoutContainer: css`
    display: flex;
    flex: 1;
    justify-content: flex-end;
  `,
  searchBar: css`
    width: 100%;
    padding: 0;
  `,
  menu: css`
    display: flex;
    border-bottom: 0;
    background: transparent;
    border: 0;
  `,
  menuVertical: css`
    background-color: rgba(0, 0, 0, 0.8);
  `,
  menuItem: css`
    &:hover {
      border-bottom: 0 !important;
      background-color: transparent !important;
    }
    @media screen and (max-width: 786px) {
      margin: 10px;
    }
  `,
  menuLink: css`
    color: #fff !important;
    &:hover {
      color: rgba(255, 255, 255, 0.5) !important;
    }
  `,
  button: css`
    padding: 0;
    &:hover {
      color: rgba(255, 255, 255, 0.5) !important;
    }
  `,
  icon: css`
    font-size: 25px;
    color: #fff;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  `
};

const Header = ({ authenticated, logout }) => {
  return (
    <Layout.Header className={styles.header}>
      <Link className={styles.button} to="/">
        <div style={{ width: "11%", display: "inline", marginRight: "15px" }}>
          <img
            src="/logo.png"
            alt=""
            width="40px"
            style={{
              backgroundColor: "white",
              borderRadius: "50% 50%"
            }}
          />
        </div>
      </Link>
      <span style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>
        Viện tim mạch Việt Nam
      </span>
      <div className={styles.logoutContainer}>
        {authenticated ? (
          <>
            <Link icon="logout" to="/profile/view" type="link" title="Profile">
              <Icon type="user" />
            </Link>
            <span
              style={{
                color: "#fff",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
            >
              |
            </span>
            <Link
              className={styles.button}
              onClick={logout}
              icon="logout"
              to="/login"
              type="link"
            >
              Logout
            </Link>
          </>
        ) : (
          <div className={styles.buttonGroup}>
            <Link
              className={styles.button}
              icon="login"
              to="/login"
              type="link"
            >
              Login
            </Link>
            <span style={{ color: "#fff", padding: "10px" }}>or</span>
            <Link
              className={styles.button}
              icon="user-add"
              to="/register"
              type="link"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </Layout.Header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
