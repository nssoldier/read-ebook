/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { css } from "emotion";
import FormHeader from "./FormHeader";
import { useLocation, useHistory } from "react-router-dom";

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
  `,
  buttonRow: css`
    @media screen and (max-width: 320px) {
      flex-direction: column;
      justify-content: center;
    }
  `
};

const ResetForm = ({
  sendOTP,
  resetPassword,
  form: { getFieldDecorator, getFieldValue, setFields, validateFields },
  formErrors = {}
}) => {
  const { state } = useLocation();
  const history = useHistory();
  const [passwordRequire, setPasswordRequire] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      const { newPassword, password, otp } = values;
      const { email } = state;
      if (!err) {
        if (newPassword === password) {
          try {
            const params = { newPassword, otp, email };
            await resetPassword(params);
            alert("Đổi mật khẩu thành công");
            await history.push("./login");
          } catch (error) {
            alert("Đổi mật khẩu thất bại");
          }
          setPasswordRequire(false);
        } else {
          setPasswordRequire(true);
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
          className={styles.buttonRow}
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <Button
              style={{}}
              onClick={async () => {
                const result = await sendOTP(state.email);
                if (result) {
                  alert("Gửi lại mã thành công");
                }
              }}
            >
              Gửi lại mã
            </Button>
          </div>

          <div>
            <Button type="primary" htmlType="submit" style={{ marginRight: 5 }}>
              Tiếp tục
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
        <FormHeader isResetpw />
        <Form.Item label="Mật khẩu">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Thông tin bắt buộc" }]
          })(
            <Input
              onInputCapture
              type="password"
              placeholder="Nhập mật khẩu"
              className={styles.formField}
            />
          )}
        </Form.Item>
        <Form.Item label="Mật khẩu mới">
          {getFieldDecorator("newPassword", {
            rules: [{ required: true, message: "Thông tin bắt buộc" }]
          })(
            <Input
              type="password"
              placeholder="Nhập mật khẩu mới"
              className={styles.formField}
            />
          )}
        </Form.Item>
        <Form.Item label="OTP">
          {getFieldDecorator("otp", {
            rules: {
              required: passwordRequire,
              message: "Mật khẩu mới không chính xác .vui lòng nhập lại"
            }
          })(<Input placeholder="Nhập mã OTP" className={styles.formField} />)}
        </Form.Item>
        <BottomButton />
      </Form>
    </React.Fragment>
  );
};

export default Form.create({ name: "reset-form" })(ResetForm);
