import React from "react";
import LoginForm from "../modules/authentication/containers/LoginForm";
import { css } from "emotion";

const styles = {
  container: css`
    width: 80vh;
    border-radius: 10px;
    height: 62vh;
    @media screen and (max-width: 320px) {
      width: 300px;
      height: 72vh;
    }
    @media screen and (max-width: 360px) and (min-width: 321px) {
      width: 300px;
      height: 66vh;
    }
    @media screen and (max-width: 375px) and (min-width: 361px) {
      width: 300px;
      height: 50vh;
    }
    @media screen and (max-width: 411px) and (min-width: 376px) {
      width: 300px;
      height: 55vh;
    }
    @media screen and (max-width: 420px) and (min-width: 412px) {
      width: 300px;
      height: 60vh;
    }
    @media screen and (max-width: 800px) and (min-width: 420px) {
      width: 50vh;
      height: 48vh;
    }
    @media screen and (max-width: 1025px) and (min-width: 800px) {
      width: 50vh;
      height: 40vh;
    }
    display: flex;
    margin: auto;
    margin-top: 10vh;
    padding: 15px;
    align-content: center;
    background-color: #fcfcfc;
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
