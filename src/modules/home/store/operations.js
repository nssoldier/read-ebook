import createOperation from "../../../utils/createOperation";
import * as bookServices from "../services";
import slice from "./slice";

const {
  actions: {
    getBookFail,
    getBookStart,
    getBookSuccess,
    claimBookFail,
    claimBookStart,
    claimBookSuccess,
    getBookListClaimedFail,
    getBookListClaimedStart,
    getBookListClaimedSuccess
  }
} = slice;

export const getBookListClaimed = createOperation({
  actions: {
    startAction: getBookListClaimedStart,
    successAction: getBookListClaimedSuccess,
    failAction: getBookListClaimedFail
  },
  process: async () => {
    const data = await bookServices.getBookListClaimed();
    return data;
  }
});

export const getBook = createOperation({
  actions: {
    startAction: getBookStart,
    successAction: getBookSuccess,
    failAction: getBookFail
  },
  process: async ({ payload }) => {
    const data = await bookServices.getBook(payload);
    return data;
  }
});

export const claimBook = createOperation({
  actions: {
    startAction: claimBookStart,
    successAction: claimBookSuccess,
    failAction: claimBookFail
  },
  process: async ({ payload }) => {
    const data = await bookServices.claimBook(payload);
    return data;
  }
});
