import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {actions} from "../store";
import LoginForm from "../components/LoginForm";

const mapStateToProps = (state) => ({
  formErrors: state.authentication.loginErrors
});

const mapDispatchToProps = (dispatch, {history}) => ({
  navigateToForgotPassword: () => {
    history.push("/forgotpw");
  },
  navigateToRegister: () => {
    history.push("/register");
  },
  onSubmit: async (values) => dispatch(actions.login({history, values}))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
