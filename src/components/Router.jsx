import { BrowserRouter, Route, Switch } from "react-router-dom";
import authentication from "./Authentication";
import CreateAccount from "./CreateAccount";
import ForgotPwd from "./ForgotPwd";
import Home from "./Home";
import ResetPasswordEmail from "./ResetPasswordEmail";




function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/forgotPassword" component={ForgotPwd} />
        <Route path="/reset" component={ResetPasswordEmail} />
        <Route path="/welcome" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
