import createOperation from "../../../utils/createOperation";
import { getItem, removeItem } from "../../../utils/localStorage";
import * as authenticationServices from "../services";
// import { useSelector } from "react-redux";
import slice from "./slice";
import { actions } from "./index";

const {
  actions: {
    checkTokenFail,
    checkTokenStart,
    checkTokenSuccess,
    updateInformationFail,
    updateInformationStart,
    updateInformationSuccess,
    getCurrentUserFail,
    getCurrentUserStart,
    getCurrentUserSuccess,
    loginFail,
    loginStart,
    loginSuccess,
    logoutFail,
    logoutStart,
    logoutSuccess,
    registerFail,
    registerStart,
    registerSuccess
  }
} = slice;

const ignorePaths = ["/login", "/register"];

const publicPaths = [
  // {
  //       name: "/"
  //   },
  //   {
  //       name: "/category",
  //       recursive: true
  //   },
  //   {
  //       name: "/search",
  //       recursive: true
  //   },
  //   {
  //       name: "/gig",
  //       recursive: true
  //   },
  //   {
  //       name: "/user",
  //       recursive: true
  //   },
  //   {
  //       name: "/user-list",
  //       recursive: true
  //   }
];

export const checkToken = createOperation({
  actions: {
    startAction: checkTokenStart,
    successAction: checkTokenSuccess,
    failAction: checkTokenFail
  },
  process: async ({ payload: { history, location }, dispatch }) => {
    const token = getItem("accessToken");
    const { pathname } = location;
    const isIgnored = ignorePaths.indexOf(pathname) !== -1;
    const isPublic = !!publicPaths.find(({ name, recursive }) => {
      if (!recursive) {
        return name === pathname;
      }
      return (pathname || "").startsWith(name);
    });
    if (!token) {
      if (!isIgnored && !isPublic) {
        history.push("/login");
      }
      throw new Error("Invalid token!");
    }
    await dispatch(actions.getCurrentUser());

    if (isIgnored && !isPublic) {
      history.push("/");
    }
  }
});

export const updateInformation = createOperation({
  actions: {
    startAction: updateInformationStart,
    successAction: updateInformationSuccess,
    failAction: updateInformationFail
  },
  process: async ({ payload }) => {
    const data = await authenticationServices.updateInformation(payload);
    return data;
  }
});

export const login = createOperation({
  actions: {
    startAction: loginStart,
    successAction: loginSuccess,
    failAction: loginFail
  },
  process: async ({ payload: { history, values } }) => {
    await authenticationServices.login(values);
    history.push("/");
  }
});

export const getCurrentUser = createOperation({
  actions: {
    startAction: getCurrentUserStart,
    successAction: getCurrentUserSuccess,
    failAction: getCurrentUserFail
  },
  process: async () => {
    return await authenticationServices.getCurrentUser();
  }
});

export const logout = createOperation({
  actions: {
    startAction: logoutStart,
    successAction: logoutSuccess,
    failAction: logoutFail
  },
  process: () => {
    removeItem("accessToken");
  }
});

export const register = createOperation({
  actions: {
    startAction: registerStart,
    successAction: registerSuccess,
    failAction: registerFail
  },
  process: async ({ payload: { history, values } }) => {
    await authenticationServices.register(values);
    history.push("/login");
  }
});
