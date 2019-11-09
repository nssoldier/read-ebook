import gql from "graphql-tag";

import { userClient } from "../../utils/apollo-client/graphQLClient";
import { setItem } from "../../utils/localStorage";

export const login = async ({ email, password }) => {
  const res = await userClient.query({
    variables: {
      email,
      password
    },
    query: gql`
      query login($email: String, $password: String) {
        login(email: $email, password: $password)
      }
    `
  });
  setItem("accessToken", res.data.login);
  return res.data.login;
};

export const getCurrentUser = async () => {
  const res = await userClient.query({
    query: gql`
      query getCurrentUser {
        getCurrentUser {
          id
          username
          email
          password
          phoneNumber
          workplace
          technique
          fullName
          createdAt
          firstTime
        }
      }
    `
  });

  return res.data.getCurrentUser;
};

export const updateInformation = async ({
  phoneNumber,
  workplace,
  technique,
  fullName
}) => {
  const res = await userClient.mutate({
    variables: {
      phoneNumber,
      workplace,
      technique,
      fullName
    },
    mutation: gql`
      mutation(
        $phoneNumber: String
        $workplace: String
        $technique: String
        $fullName: String
      ) {
        updateInformation(
          phoneNumber: $phoneNumber
          workplace: $workplace
          technique: $technique
          fullName: $fullName
        ) {
          id
          username
          email
          password
          phoneNumber
          workplace
          technique
          fullName
          createdAt
          firstTime
        }
      }
    `
  });
  return res.data.updateInformation;
};

export const register = async ({ email, username, password }) => {
  const res = await userClient.mutate({
    variables: {
      username,
      password,
      email
    },
    mutation: gql`
      mutation register($username: String, $password: String, $email: String) {
        register(username: $username, password: $password, email: $email)
      }
    `
  });
  return res.data.register;
};
