/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Icon, Input } from "antd";
import { css, cx } from "emotion";

const propTypes = {
  form: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,

  formErrors: PropTypes.shape({}),
  navigateToLogin: PropTypes.func
};

const defaultProps = {
  formErrors: {},
  navigateToLogin: () => {}
};

const styles = {
  icon: css`
    color: "rgba(0,0,0,.25)";
  `,
  regisForm: css`
    width: 100%;
  `,
  regisFormButton: css`
    width: 100%;
  `,
  cancelButton: css`
    width: 100%;
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

const RegisterForm = ({
  form: { getFieldDecorator, getFieldValue, setFields, validateFields },
  formErrors,
  navigateToLogin,
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

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(true);

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

  useEffect(() => {
    if (rePassword && password && password !== rePassword) {
      setPasswordErr(true);
    }
    if (password === rePassword) {
      setPasswordErr(false);
    }
  }, [password, rePassword, setPasswordErr]);

  return (
    <Form className={styles.regisForm} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Đăng ký
        </h2>
      </div>
      <Form.Item label="Email">
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input
            prefix={<Icon type="mail" className={styles.icon} />}
            placeholder="Nhập Email"
            className={styles.formField}
          />
        )}
      </Form.Item>
      <Form.Item label="User name">
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input
            prefix={<Icon type="user" className={styles.icon} />}
            placeholder="Nhập tên đăng nhập"
            className={styles.formField}
          />
        )}
      </Form.Item>
      <Form.Item label="Mật khẩu">
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input.Password
            prefix={<Icon type="lock" className={styles.icon} />}
            placeholder="Nhập mật khẩu"
            onChange={e => setPassword(e.target.value)}
            className={styles.formField}
          />
        )}
      </Form.Item>
      <Form.Item label="Nhập lại mật khẩu">
        {getFieldDecorator("rePassword", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input.Password
            prefix={<Icon type="lock" className={styles.icon} />}
            placeholder="Nhập lại mật khẩu"
            onChange={e => setRePassword(e.target.value)}
            className={styles.formField}
          />
        )}
        <div
          style={{
            color: "red",
            visibility: passwordErr ? "visible" : "hidden"
          }}
        >
          Mật khẩu không trùng khớp.
        </div>
      </Form.Item>
      <Form.Item className={styles.loginFormFooter}>
        <Button
          type="primary"
          htmlType="submit"
          className={cx(styles.regisFormButton, styles.formField)}
        >
          Đăng ký
        </Button>
        <Button
          className={cx(styles.cancelButton, styles.formField)}
          type="link"
        >
          <a onClick={() => navigateToLogin()}>Đăng nhập</a>
        </Button>
      </Form.Item>
    </Form>
  );
};

RegisterForm.propTypes = propTypes;

RegisterForm.defaultProps = defaultProps;

export default Form.create({ name: "register-form" })(RegisterForm);
