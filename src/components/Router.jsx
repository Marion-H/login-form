import { BrowserRouter, Route, Switch } from "react-router-dom";
import authentication from "./Authentication";
import CreateAccount from "./CreateAccount";
import ForgotPwd from "./ForgotPwd";
import FormPasswordChange from "./FormPasswordChange";
import Home from "./Home";
import ResetPasswordEmail from "./ResetPasswordEmail";
import ResetPasswordValidation from "./ResetPasswordValidation";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/forgotPassword" component={ForgotPwd} />
        <Route path="/check-email" component={ResetPasswordEmail} />
        <Route path="/welcome" component={Home} />
        <Route
          path="/reset/:resetPasswordToken"
          component={FormPasswordChange}
        />
        <Route path="/validation" component={ResetPasswordValidation} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
