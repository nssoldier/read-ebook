import ResetForm from "../components/ResetForm";
import { userClient } from "../../../utils/apollo-client/graphQLClient";
import gql from "graphql-tag";
import React, { useCallback } from "react";
import { sendOTP } from "./ForgotForm";

export default ({}) => {
  const resetPassword = useCallback(async payload => {
    const { email, otp, newPassword } = payload;
    const mutation = gql`
      mutation forgotPassword(
        $email: String
        $otp: String
        $newPassword: String
      ) {
        forgotPassword(email: $email, OTP: $otp, newPassword: $newPassword)
      }
    `;

    const res = await userClient.mutate({
      variables: {
        email,
        otp,
        newPassword
      },
      mutation: mutation
    });
    return res.data.forgotPassword;
  }, []);

  return <ResetForm resetPassword={resetPassword} sendOTP={sendOTP} />;
};
