import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import HomePage from "./pages/Home.page";
import ReadBookPage from "./pages/ReadBook.page";

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
