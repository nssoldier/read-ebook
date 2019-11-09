import React from "react";
import { Button, Modal, Icon, Input, Form, Select } from "antd";
import { css } from "emotion";
import ListBookComponent from "./ListBookComponent";

const styles = {
  icon: css`
    color: "rgba(0,0,0,.25)";
  `,
  loginForm: css`
    width: 100%;
  `,
  button: css`
    // width: 100%;
    float: right;
    margin-top: 15px;
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
  bookItem: css`
    width: 500px;
    display: flex;
    flex-direction: column;
    border: 1px solid #f0f0f0;
    padding: 15px;
    align-items: start;
  `
};
const prefixSelector = (
  <Select defaultValue="0" style={{ width: 70 }}>
    <Select.Option value="0">+84</Select.Option>
  </Select>
);

const UpdateInformationForm = ({
  form: { getFieldDecorator, validateFields },
  onSubmit
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        onSubmit({ ...values, phoneNumber: `0${values.phoneNumber}` });
      }
    });
  };
  return (
    <Form className={styles.loginForm} onSubmit={handleSubmit}>
      <Form.Item label="Họ và tên">
        {getFieldDecorator("fullName", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(<Input placeholder="Nhập đầy đủ họ tên" />)}
      </Form.Item>
      <Form.Item label="Số điện Thoại">
        {getFieldDecorator("phoneNumber", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(
          <Input
            prefix={<Icon type="phone" className={styles.icon} />}
            placeholder="Nhập số điện thoại"
            type="number"
            addonBefore={prefixSelector}
          />
        )}
      </Form.Item>
      <Form.Item label="Địa chỉ công tác">
        {getFieldDecorator("workplace", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(<Input placeholder="Nhập địa chỉ công tác" />)}
      </Form.Item>
      <Form.Item label="Chuyên môn">
        {getFieldDecorator("technique", {
          rules: [{ required: true, message: "Thông tin bắt buộc" }]
        })(<Input placeholder="Nhập chuyên môn" />)}
      </Form.Item>
      <Form.Item>
        <Button className={styles.button} htmlType="submit" type="primary">
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  );
};

const FormComponent = Form.create({ name: "login-form" })(
  UpdateInformationForm
);

const ListBookClaim = ({
  books,
  readBook,
  firstTime,
  claimBook,
  onSubmit,
  loadingBooks,
  claiming,
  claimErr
}) => {
  return (
    <React.Fragment>
      <ListBookComponent
        books={books}
        claimBook={claimBook}
        readBook={readBook}
        loadingBooks={loadingBooks}
        claiming={claiming}
        claimErr={claimErr}
      />
      <Modal
        visible={firstTime}
        title="Cập nhật thông tin"
        footer={null}
        closable={false}
      >
        <FormComponent onSubmit={onSubmit} />
      </Modal>
    </React.Fragment>
  );
};

export default ListBookClaim;
