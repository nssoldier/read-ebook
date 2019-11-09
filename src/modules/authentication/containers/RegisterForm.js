import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { actions } from "../store";
import RegisterForm from "../components/RegisterForm";

const mapStateToProps = state => ({
  formErrors: state.authentication.registerErrors
});

const mapDispatchToProps = (dispatch, { history }) => ({
  navigateToLogin: () => history.push("/login"),
  onSubmit: async values => dispatch(actions.register({ history, values }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterForm)
);
