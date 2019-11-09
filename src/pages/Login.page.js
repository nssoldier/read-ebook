import React from "react";
import LoginForm from "../modules/authentication/containers/LoginForm";
import { css } from "emotion";

const styles = {
  container: css`
    width: 400px;
    display: flex;
    margin: auto;
    border: 1px solid #f0f0f0;
    padding: 15px;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: #fcfcfc;
    padding-top: 0px;
  `,
  background: css`
    background-image: linear-gradient(#48c6ef, #66a6ff);
    height: 100vh;
    display: flex;
  `
};
const RegisterPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </div>
  );
};

export default RegisterPage;
