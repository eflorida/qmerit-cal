import { App } from "../shared/App";
import React from "react";
import express from "express";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { htmlTemplate } from "./template";
import { configureStore } from "../shared/store/configureStore";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const context = {};
const store = configureStore();

let server = new express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const preloadedState = store.getState();
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    if (context.url) {
      res.redirect(context.url);
    } else {
      res
        .status(200)
        .send(
          htmlTemplate(
            assets.client.css,
            assets.client.js,
            preloadedState,
            markup
          )
        );
    }
  });

export default server;
