import { BrowserRouter, Route, Switch } from "react-router-dom";
import authentication from "./Authentication";
import CreateAccount from "./CreateAccount";
import ForgotPwd from "./ForgotPwd";
import ResetPasswordEmail from "./ResetPasswordEmail";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/forgotPassword" component={ForgotPwd} />
        <Route path="/reset" component={ResetPasswordEmail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
