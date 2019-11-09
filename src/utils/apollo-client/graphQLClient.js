import ApolloClient from "apollo-boost";

import config from "../../config";
import { getItem } from "../localStorage";

const createClient = ({ uri }) => {
  const options = {
    uri: `${config.API_SERVER}${uri}`,
    request: operation => {
      const token = getItem("accessToken");
      if (token) {
        operation.setContext({
          headers: {
            "x-access-token": token
          }
        });
      }
    }
  };
  const client = new ApolloClient(options);
  client.defaultOptions = { query: { fetchPolicy: "network-only" } };
  return client;
};

export const userClient = createClient({
  uri: "/authen"
});

export const bookClient = createClient({
  uri: "/book"
});
