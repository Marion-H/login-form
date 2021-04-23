import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import authentication from "./Authentication";
import CreateAccount from "./CreateAccount";
import ForgotPwd from "./ForgotPwd";
import FormPasswordChange from "./FormPasswordChange";
import Home from "./Home";
import ResetPasswordEmail from "./ResetPasswordEmail";
import ResetPasswordValidation from "./ResetPasswordValidation";


function AuthRoute({ component: Component, ...rest }) {
  const tokenSession = sessionStorage.getItem("token");

  if (tokenSession) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Component {...props} />
          </>
        )}
      />
    );
  }

  return <Redirect to="/" />;
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/forgotPassword" component={ForgotPwd} />
        <Route path="/check-email" component={ResetPasswordEmail} />
        <AuthRoute path="/home" component={Home} />
        <Route
          path="/reset/:resetPasswordToken"
          component={FormPasswordChange}
        />
        <AuthRoute path="/validation" component={ResetPasswordValidation} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
