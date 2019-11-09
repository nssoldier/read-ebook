import React from "react";
import { Layout } from "antd";
import { css } from "emotion";

const styles = {
  footer: css`
    text-align: center;
    color: #a3a3a3;
    font-size: 12px;
    padding: 6px;
  `
};

export default () => (
  <Layout.Footer className={styles.footer}>
    VTM-Book &copy; VTM-Book
  </Layout.Footer>
);
