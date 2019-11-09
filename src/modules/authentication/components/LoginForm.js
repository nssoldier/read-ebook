/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Icon, Input } from "antd";
import { css, cx } from "emotion";

const propTypes = {
  form: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,

  formErrors: PropTypes.shape({}),
  navigateToForgotPassword: PropTypes.func,
  navigateToRegister: PropTypes.func
};

const defaultProps = {
  formErrors: {},
  navigateToForgotPassword: () => {},
  navigateToRegister: () => {}
};

const styles = {
  icon: css`
    color: "rgba(0,0,0,.25)";
  `,
  loginForm: css`
    width: 100%;
  `,
  loginFormButton: css`
    width: 100%;
  `,
  loginFormFooter: css`
    margin-bottom: 0;
  `,
  loginFormForgot: css`
    text-align: right;
  `,
  register: css`
    text-align: center;
  `,
  formField: css`
    height: 40px;
    margin-top: 5px;
  `,
  header: css`
    border-bottom: 1.5px solid #ebebeb;
    height: 100px;
    margin-bottom: 15px;
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  `
};

const LoginForm = ({
  form: { getFieldDecorator, getFieldValue, setFields, validateFields },
  formErrors,
  navigateToForgotPassword,
  navigateToRegister,
  onSubmit
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  useEffect(() => {
    const formErrorKeys = Object.keys(formErrors);
    if (formErrorKeys.length) {
      setFields(
        formErrorKeys.reduce(
          (obj, key) => ({
            ...obj,
            [key]: {
              errors: [new Error(formErrors[key])],
              value: getFieldValue(key)
            }
          }),
          {}
        )
      );
    }
  }, [formErrors, getFieldValue, setFields]);

  return (
    <Form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Đăng nhập
        </h2>
      </div>
      <Form.Item label="Email">
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input
            prefix={<Icon type="user" className={styles.icon} />}
            placeholder="Email"
            className={styles.formField}
          />
        )}
      </Form.Item>
      <Form.Item label="Mật khẩu">
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input
            prefix={<Icon type="lock" className={styles.icon} />}
            type="password"
            placeholder="Nhập mật khẩu"
            className={styles.formField}
          />
        )}
      </Form.Item>
      <Form.Item className={styles.loginFormFooter}>
        <div className={styles.loginFormForgot}>
          <a onClick={() => navigateToForgotPassword()}>Quên mật khẩu</a>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className={cx(styles.loginFormButton, styles.formField)}
          // className={styles.formField}
        >
          Đăng nhập
        </Button>
        <Button
          onClick={() => navigateToRegister()}
          className={cx(styles.loginFormButton, styles.formField)}
          type="link"
        >
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = propTypes;

LoginForm.defaultProps = defaultProps;

export default Form.create({ name: "login-form" })(LoginForm);
