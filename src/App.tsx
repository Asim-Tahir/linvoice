import { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AccessibleNavigationAnnouncer from "@/components/AccessibleNavigationAnnouncer";
import { Provider } from "react-redux";

import store from "@/store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Layout = lazy(() => import("@/containers/Layout"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Login = lazy(() => import("@/pages/Login"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CreateAccount = lazy(() => import("@/pages/CreateAccount"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <AccessibleNavigationAnnouncer />
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
