import React from "react";
import { css } from "emotion";

const styles = {
  header: css`
    margin-bottom: 2vh;
    padding: 3vh;
    border-bottom: 1.5px solid #ebebeb;
    display: flex;
    justify-content: space-around;
    align-content: center;
  `,
  text: {
    textAlign: "center",
    fontSize: 18,
    paddingTop: "3vh"
  },
  img: {
    height: "12vh",
    borderColor: "#FFFFFF",
    boxShadow: "3px 2px 18px -3px rgba(0,0,0,0.73)",
    borderRadius: "7vh",
    width: "12vh",
    top: "3vh",
    position: "absolute"
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  focused: {
    textDecoration: "underline"
  }
};

export default ({ isAuthen, isForgot, isResetpw }) => {
  return (
    <React.Fragment>
      <div style={styles.wrapper}>
        <img
          style={styles.img}
          alt="logo"
          src={require("../../../assets/logo.png")}
        />
      </div>
      <div className={styles.header}>
        {isForgot && (
          <span
            style={{
              ...styles.text,
              ...{ fontWeight: "bolder" }
            }}
          >
            Tìm tài khoản của bạn
          </span>
        )}
        {isResetpw && (
          <span
            style={{
              ...styles.text,
              ...{ fontWeight: "bolder" }
            }}
          >
            Đổi mật khẩu
          </span>
        )}
        {isAuthen && (
          <React.Fragment>
            <a href="./login" style={{ ...styles.text }}>
              Đăng Nhập
            </a>
            <a href="./register" style={{ ...styles.text }}>
              Đăng Ký
            </a>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
