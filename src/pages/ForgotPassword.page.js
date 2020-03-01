import React from "react";
import { css } from "emotion";
import ForgotForm from "../modules/authentication/containers/ForgotForm";

const styles = {
  container: css`
    width: 80vh;
    @media screen and (max-width: 1025px) {
      width: 80vw;
    }
    border-radius: 10px;
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

const ForgotPasswordPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <ForgotForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
