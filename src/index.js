import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GalleryProvider } from "./context/GalleryContext";
import Routes from "./router";

const Providers = () => {
  return (
    <GalleryProvider>
      <Routes />
    </GalleryProvider>
  );
};

const BasicComponent = () => {
  return (
    <GalleryProvider>
      <Router>
        <Switch>
          <Route path="/" component={Providers} />
        </Switch>
      </Router>
    </GalleryProvider>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<BasicComponent />, rootElement);
