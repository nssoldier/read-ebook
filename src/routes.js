import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import HomePage from "./pages/Home.page";
import ReadBookPage from "./pages/ReadBook.page";
import ForgotPasswordPage from "./pages/ForgotPassword.page";
import ResetPasswordPage from "./pages/ResetPassword.page";

export default [
  {
    component: LoginPage,
    exact: true,
    path: "/login"
  },
  {
    component: HomePage,
    exact: true,
    path: "/"
  },
  {
    component: ForgotPasswordPage,
    exact: true,
    path: "/forgotpw"
  },
  {
    component: ResetPasswordPage,
    exact: true,
    path: "/resetpw"
  },
  {
    component: RegisterPage,
    exact: true,
    path: "/register"
  },
  {
    component: ReadBookPage,
    exact: true,
    path: "/read/:bookId"
  }
];
