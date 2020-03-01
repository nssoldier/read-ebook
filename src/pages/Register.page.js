import React from "react";
import RegisterForm from "../modules/authentication/containers/RegisterForm";
import { css } from "emotion";

const styles = {
  container: css`
    width: 80vh;
    border-radius: 10px;
    // height: 85vh;
    // @media screen and (max-width: 320px) {
    //   width: 300px;
    //   height: 72vh;
    // }
    // @media screen and (max-width: 360px) and (min-width: 321px) {
    //   width: 300px;
    //   height: 66vh;
    // }
    // @media screen and (max-width: 376px) and (max-height: 813px) {
    //   width: 300px;
    //   height: 60vh;
    // }
    // @media screen and (max-width: 375px) and (min-width: 361px) {
    //   width: 300px;
    //   height: 88vh;
    // }
    // @media screen and (max-width: 411px) and (min-width: 376px) {
    //   width: 300px;
    //   height: 55vh;
    // }
    // @media screen and (max-width: 420px) and (min-width: 412px) {
    //   width: 300px;
    //   height: 82vh;
    // }
    // @media screen and (max-width: 800px) and (min-width: 420px) {
    //   width: 50vh;
    //   height: 66vh;
    // }
    @media screen and (max-width: 1025px) {
      width: 80vw;
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
    display: flex;
    height: 100vh;
    @media screen and (max-width: 320px) {
      height: 100%;
    }
  `
};
const RegisterPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
