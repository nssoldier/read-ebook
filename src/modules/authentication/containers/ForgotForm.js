import ForgotForm from "../components/ForgotForm";
import { userClient } from "../../../utils/apollo-client/graphQLClient";
import gql from "graphql-tag";
import React from "react";

export const sendOTP = async email => {
  const res = await userClient.query({
    variables: {
      email
    },
    query: gql`
      query requestOTP($email: String) {
        requestOTP(email: $email)
      }
    `
  });
  const result = res.data.requestOTP;

  return result;
};

export default ({}) => {
  return <ForgotForm sendOTP={sendOTP} />;
};
