import { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { A11yNavigationAnnouncer } from "@linvoice/components";

import store from "@linvoice/store";

const Layout = lazy(
  () => import("@linvoice/components/templates/containers/Layout")
);
const Login = lazy(() => import("@linvoice/components/pages/Login"));
const CreateAccount = lazy(
  () => import("@linvoice/components/pages/CreateAccount")
);
const ForgotPassword = lazy(
  () => import("@linvoice/components/pages/ForgotPassword")
);

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <A11yNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </Provider>
  );
}
