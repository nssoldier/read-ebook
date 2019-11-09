import React, { useState } from "react";
import { css } from "emotion";
import ShowMoreText from "react-show-more-text";
import { Button, Input, Form, Card } from "antd";

const styles = {
  desc: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  content: css`
    width: 550px;
    display: flex;
    flex-direction: column;
    border: 1px solid #f0f0f0;
    padding: 15px 15px 15px 0px;
    border-radius: 5px;
  `,
  hideButton: css`
    align-items: center;
    display: flex;
    overflow-y: hidden;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    justify-content: center;
    align-content: center;
  `,
  container: css`
    margin-top: 35px;
  `,
  button: css`
    display: flex;
    justify-content: flex-end;
  `
};

const ListBookComponent = ({
  books,
  readBook,
  claimBook,
  claiming,
  loadingBooks,
  claimErr
}) => {
  const [code, setCode] = useState("");
  return (
    <div style={{ width: "1200px", display: "flex-box" }}>
      {loadingBooks && (
        <Card
          style={{ width: "100%", margin: "15px" }}
          loading={loadingBooks}
        ></Card>
      )}
      {books.map((book, i) => (
        <Card
          key={i}
          style={{ width: "100%", margin: "15px" }}
          title={book.title}
          extra={
            <Button onClick={() => readBook(book.id)} type="primary">
              Đọc sách
            </Button>
          }
        >
          <div className={styles.desc}>
            <div style={{ width: "30%" }}>
              <img width="100%" alt="" src={book.img} />
            </div>
            <div style={{ width: "65%" }}>
              <ShowMoreText more="Xem thêm" less="Ẩn bớt" lines={10}>
                {book.description}
              </ShowMoreText>
            </div>
          </div>
        </Card>
      ))}
      <div className={styles.container}>
        <Card title="Nhận thêm sách" style={{ width: "100%", margin: "15px" }}>
          <Form style={{ margin: "15px 0 15px 0" }}>
            <Form.Item
              label="Mã sách"
              labelCol={{ xs: { span: 2 }, sm: { span: 8 } }}
              wrapperCol={{
                xs: {
                  span: 22
                },
                sm: {
                  span: 16
                }
              }}
            >
              <Input
                style={{ width: "70%" }}
                placeholder="Nhập mã sách"
                value={code}
                onChange={e => setCode(e.target.value.toUpperCase())}
              />
              <div
                style={{ color: "red", display: claimErr ? "block" : "none" }}
              >
                Mã không hợp lệ!
              </div>
            </Form.Item>
            <Form.Item
              label=""
              labelCol={{ span: 2 }}
              wrapperCol={{
                xs: {
                  span: 24,
                  offset: 0
                },
                sm: {
                  span: 16,
                  offset: 8
                }
              }}
            >
              <Button
                loading={claiming}
                onClick={() => claimBook(code)}
                type="primary"
              >
                Nhận sách
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ListBookComponent;
