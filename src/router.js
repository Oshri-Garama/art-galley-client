import { Route, Switch, withRouter } from "react-router-dom";
import ArtPage from "./components/ArtPage/ArtPage";
import App from "./App";

const Routes = () => {
  return (
    <Switch>
      <Route path="/art/:id" component={ArtPage} />
      <Route path="/" component={App} />
    </Switch>
  );
};

export default withRouter(Routes);
