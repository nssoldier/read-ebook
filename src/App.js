import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import routes from "./routes";
import { actions } from "./modules/authentication/store";

const App = ({ history, location }) => {
  const authenticated = useSelector(
    state => state.authentication.authenticated
  );
  const authenticating = useSelector(
    state => state.authentication.authenticating
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!authenticated && !authenticating) {
        await dispatch(actions.checkToken({ history, location }));
      }
    })();
  }, [authenticated, authenticating, dispatch, history, location]);

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default withRouter(App);
