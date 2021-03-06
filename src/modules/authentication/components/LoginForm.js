/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Icon, Input } from "antd";
import { css, cx } from "emotion";
import FormHeader from "./FormHeader";

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
    height: 100%;
  `,
  loginFormButton: css`
    width: 100%;
  `,
  loginFormFooter: css`
    margin-bottom: 0;
  `,
  loginFormForgot: css`
    margin-top: 2vh;
    text-align: center;
  `,
  register: css`
    text-align: center;
  `,
  formField: css`
    height: 40px;
    margin-top: 5px;
  `
};

const LoginForm = ({
  form: { getFieldDecorator, getFieldValue, setFields, validateFields },
  formErrors,
  navigateToForgotPassword,
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
    <React.Fragment>
      <Form className={styles.loginForm} onSubmit={handleSubmit}>
        <FormHeader isAuthen />
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
        <Button
          style={{ marginTop: "2vh" }}
          type="primary"
          htmlType="submit"
          className={cx(styles.loginFormButton, styles.formField)}
        >
          Đăng nhập
        </Button>
        <div className={styles.loginFormForgot}>
          <a href="./forgotpw">Quên mật khẩu</a>
        </div>
      </Form>
    </React.Fragment>
  );
};

LoginForm.propTypes = propTypes;

LoginForm.defaultProps = defaultProps;

export default Form.create({ name: "login-form" })(LoginForm);
