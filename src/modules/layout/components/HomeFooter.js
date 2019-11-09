import React from 'react';
import { Layout, Row, Col, Typography, Divider, Icon } from 'antd';
import { css } from 'emotion';

const { Text } = Typography;

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    padding-top: 50px;
  `,
  socialNetwork: css`
    display: flex;
  `,
  row: css`
    width: 100%;
  `,
  col: css`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  title: css`
    font-size: 15px;
    margin-bottom: 30px;
  `,
  link: css`
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 15px;
  `,
  icon: css`
    margin-right: 30px;
    font-size: 20px;
  `,
  iconLink: css`
  color: rgba(0, 0, 0, 0.65);
  `
};

export default () => (
  <Layout.Footer>
    <div className={styles.container}>
      <Row className={styles.row} gutter={24}>
        <Col className={styles.col} lg={6}>
          <Text strong className={styles.title}>
            Categories
          </Text>
          <a className={styles.link} href="/">
            New arrivals
          </a>
          <a className={styles.link} href="/">
            Collections
          </a>
          <a className={styles.link} href="/">
            Furniture
          </a>
          <a className={styles.link} href="/">
            Lighting
          </a>
          <a className={styles.link} href="/">
            Home Accessories
          </a>
        </Col>
        <Col className={styles.col} lg={6}>
          <Text strong className={styles.title}>
            About
          </Text>
          <a className={styles.link} href="/">
            Careers
          </a>
          <a className={styles.link} href="/">
            Partnerships
          </a>
          <a className={styles.link} href="/">
            Privacy Policy
          </a>
          <a className={styles.link} href="/">
            Terms of Service
          </a>
        </Col>
        <Col className={styles.col} lg={6}>
          <Text strong className={styles.title}>
            Support
          </Text>
          <a className={styles.link} href="/">
            Help & Support
          </a>
          <a className={styles.link} href="/">
            Trust & Safety
          </a>
          <a className={styles.link} href="/">
            Contact us
          </a>
        </Col>
        <Col className={styles.col} lg={6}>
          <Text strong className={styles.title}>
            Community
          </Text>
          <a className={styles.link} href="/">
            Sale
          </a>
          <a className={styles.link} href="/">
            Events
          </a>
          <a className={styles.link} href="/">
            Blog
          </a>
          <a className={styles.link} href="/">
            Forum
          </a>
        </Col>
      </Row>
    </div>
    <Divider />
    <div className={styles.socialNetwork}>
      <a className={styles.iconLink} href="/">
        <Icon className={styles.icon} type="twitter" />
      </a>
      <a className={styles.iconLink} href="/">
        <Icon className={styles.icon} type="instagram" />
      </a>
      <a className={styles.iconLink} href="/">
        <Icon className={styles.icon} type="facebook" />
      </a>
      <a className={styles.iconLink} href="/">
        <Icon className={styles.icon} type="amazon" />
      </a>
      <a className={styles.iconLink} href="/">
        <Icon className={styles.icon} type="youtube" />
      </a>
    </div>
  </Layout.Footer>
);
