import gql from "graphql-tag";

import { bookClient } from "../../utils/apollo-client/graphQLClient";
import config from "../../config";

export const getBookListClaimed = async () => {
  const res = await bookClient.query({
    query: gql`
      query getBookListClaimed {
        getBookListClaimed {
          id
          title
          description
          linkUrl
          img
        }
      }
    `
  });

  return res.data.getBookListClaimed;
};

export const getBook = async bookId => {
  const res = await bookClient.query({
    variables: { bookId },
    query: gql`
      query getBook($bookId: String) {
        getBook(bookId: $bookId) {
          id
          title
          description
          linkUrl
          img
        }
      }
    `
  });

  return {
    ...res.data.getBook,
    linkUrl: `${config.API_SERVER_URL}/${res.data.getBook.linkUrl}`
  };
};

export const claimBook = async code => {
  const res = await bookClient.mutate({
    variables: { code },
    mutation: gql`
      mutation claimBook($code: String) {
        claimBook(code: $code) {
          id
          title
          description
          linkUrl
          img
        }
      }
    `
  });

  return res.data.claimBook;
};
