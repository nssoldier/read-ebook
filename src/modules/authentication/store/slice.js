import { createSlice } from "redux-starter-kit";

const initialState = {
  authenticated: false,
  authenticating: false,
  loginErrors: undefined,
  registerErrors: undefined,
  registering: false,
  registered: false,
  currentUser: {}
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    checkTokenStart: state => ({
      ...state
    }),
    checkTokenSuccess: state => ({
      ...state,
      authenticated: true
    }),
    checkTokenFail: state => ({
      ...state,
      authenticated: false
    }),
    loginStart: state => ({
      ...state,
      authenticating: true,
      loginErrors: undefined
    }),
    loginSuccess: state => ({
      ...state,
      authenticated: true,
      authenticating: false,
      loginErrors: undefined
    }),
    loginFail: (state, { payload }) => ({
      ...state,
      authenticating: false,
      loginErrors: { email: payload.message, password: payload.message }
    }),
    logoutStart: state => ({
      ...state
    }),
    logoutSuccess: state => ({
      ...state,
      authenticated: false
    }),
    logoutFail: state => ({
      ...state
    }),
    registerStart: state => ({
      ...state,
      registering: true,
      registerErrors: undefined
    }),
    registerSuccess: state => ({
      ...state,
      registering: false,
      registerErrors: undefined
    }),
    registerFail: (state, { payload }) => ({
      ...state,
      registering: false,
      registerErrors: {
        email: payload.message,
        password: payload.message,
        username: payload.message
      }
    }),
    getCurrentUserStart: state => ({
      ...state
    }),
    getCurrentUserSuccess: (state, { payload }) => ({
      ...state,
      currentUser: payload.result
    }),
    getCurrentUserFail: state => ({
      ...state
    }),
    updateInformationStart: state => ({
      ...state
    }),
    updateInformationSuccess: (state, { payload }) => ({
      ...state,
      currentUser: payload.result
    }),
    updateInformationFail: state => ({
      ...state
    })
  }
});

export default authentication;
