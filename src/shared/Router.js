import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

import { Home } from "./views/home/Home";
import { ThankYou } from "./views/thankYou/ThankYou";
import { PageNotFound } from "./views/NotFound";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/thank-you" component={ThankYou} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    );
  }
}

export default Router;
