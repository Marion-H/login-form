import { BrowserRouter, Route, Switch } from "react-router-dom";
import authentication from "./Authentication";
import CreateAccount from "./CreateAccount";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication} />
        <Route path="/create" component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
