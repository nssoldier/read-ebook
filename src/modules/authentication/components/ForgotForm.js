/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Button, Form, Icon, Input } from "antd";
import { css } from "emotion";
import FormHeader from "./FormHeader";
import { useHistory } from "react-router-dom";

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

const ForgotForm = ({
  sendOTP,
  form: { getFieldDecorator, getFieldValue, setFields, validateFields },
  formErrors = {}
}) => {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      if (!err) {
        try {
          const { email } = values;
          await sendOTP(email);
          await history.push({
            pathname: "./resetpw",
            state: { email: values.email }
          });
        } catch (error) {
          alert("Không tìm thấy email của bạn. Vui lòng nhập lại email ");
        }
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

  const BottomButton = () => {
    return (
      <Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div>
            <Button type="primary" htmlType="submit" style={{ marginRight: 5 }}>
              Tìm Kiếm
            </Button>
            <Button type="ghost" href="./login">
              Huỷ
            </Button>
          </div>
        </div>
      </Form.Item>
    );
  };

  return (
    <React.Fragment>
      <Form className={styles.loginForm} onSubmit={handleSubmit}>
        <FormHeader isForgot />
        <Form.Item label="Vui lòng nhập email hoặc số điện thoại để tìm kiếm tài khoản">
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
        <BottomButton />
      </Form>
    </React.Fragment>
  );
};

export default Form.create({ name: "forgot-form" })(ForgotForm);
