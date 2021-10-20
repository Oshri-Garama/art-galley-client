import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const BasicComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<BasicComponent />, rootElement);
