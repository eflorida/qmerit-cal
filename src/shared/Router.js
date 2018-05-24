import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

import { Home } from "./views/home/Home";
import { Cal } from "./views/cal/Cal";
import { Cart } from "./views/cart/Cart";
import { EmbedtoCart } from "./views/embedtoCart/EmbedtoCart"
import { PageNotFound } from "./views/NotFound";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cal" component={Cal} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/embed-redirect" component={EmbedtoCart} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    );
  }
}

export default Router;
