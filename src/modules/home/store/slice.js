import { createSlice } from "redux-starter-kit";

const initialState = {
  listBook: [],
  book: {},
  loadingBooks: false,
  claiming: false,
  claimErr: false
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    claimBookStart: state => ({
      ...state,
      claiming: true,
      claimErr: false
    }),
    claimBookSuccess: (state, { payload }) => ({
      ...state,
      listBook: [...state.listBook, payload.result],
      claiming: false
    }),
    claimBookFail: state => ({
      ...state,
      claiming: false,
      claimErr: true
    }),
    getBookStart: state => ({
      ...state,
      claiming: true,
      claimErr: false
    }),
    getBookSuccess: (state, { payload }) => ({
      ...state,
      book: payload.result,
      claiming: false
    }),
    getBookFail: state => ({
      ...state,
      claiming: false,
      claimErr: true
    }),
    getBookListClaimedStart: state => ({
      ...state,
      loadingBooks: true
    }),
    getBookListClaimedSuccess: (state, { payload }) => ({
      ...state,
      listBook: payload.result,
      loadingBooks: false
    }),
    getBookListClaimedFail: state => ({
      ...state,
      loadingBooks: false
    })
  }
});

export default book;
