import { App } from "../shared/App";
import React from "react";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import fastXmlParser from "fast-xml-parser";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { htmlTemplate } from "./template";
import { configureStore } from "../shared/store/configureStore";
import { graingerPunchOut } from "../shared/cXML/grainger";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const context = {};
const store = configureStore();

let server = new express();
console.log('process.env.RAZZLE_PUBLIC_DIR:', process.env.RAZZLE_PUBLIC_DIR);
console.log("__dirname + '/public'", __dirname + '/public');
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.json() ) // to support JSON-encoded bodies
  .use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
  }))
  .post("/grainger-punch-out", (req, res) => {
    axios({
      method: 'post',
      url: 'https://ca.gcom.grainger.com/punchout/cxml',
      data: graingerPunchOut,
      headers: {
        'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Connection':'keep-alive',
        'Cache-Control':'max-age=0',
        'Accept-Language':'en-US,en;q=0.9',
        'Accept-Encoding':'gzip, deflate, br',
        'Content-Type':'text/xml'
      }
    })
      .then(response => {
        console.log('AXIOS :: grainger-punch-out :: success :: ');
        let cXMLData = response.data;
        if(fastXmlParser.validate(cXMLData)=== true){
          let jsonObj = fastXmlParser.parse(cXMLData);
          let punchOutUrl = jsonObj.cXML.Response.PunchOutSetupResponse.StartPage.URL;
          console.log('punchOutUrl: ', punchOutUrl);
          let resObj = {'punchOutUrl': punchOutUrl};
          res.send(resObj);
        } else {
          throw new Error('bad XML data...');
        }
      })
      .catch(error => {
        console.log('AXIOS :: grainger-punch-out :: error :: ', error);
        res.end(error);
      });
  })
  .post("/grainger-punch-in", (req, res) => {
    let cXMLData = req.body['cxml-urlencoded'];
    let cartData = {};
    if(fastXmlParser.validate(cXMLData)=== true){
      let jsonObj = fastXmlParser.parse(cXMLData);
      cartData = jsonObj.cXML.Message.PunchOutOrderMessage;
    } else {
      res.write({error:'bad XML data...'});
      res.status(503);
      res.end();
    }
    console.log('AXIOS :: grainger-punch-in :: cartData :: ', cartData);
    res.cookie('grainger-cart', cartData);
    res.status(200);
    res.redirect('/embed-redirect');
  })
  .post("/thank-you", (req, res) => {
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
  })
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
