import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import ArtPage from "./components/ArtPage/ArtPage";
import App from "./App";

const Routes = () => {
  return (
    <Switch>
      <Route path="/art/:id" component={ArtPage} />
      <Route exact path="/" component={App} />
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  );
};

export default withRouter(Routes);
