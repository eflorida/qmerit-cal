import { App } from "../shared/App";
import React from "react";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
// import { parseString } from "xml2js";
import fastXmlParser from "fast-xml-parser";
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
  .use( bodyParser.json() )      // to support JSON-encoded bodies
  .use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }))
  .post("/grainger-punch-out", (req, res) => {
    axios({
      method: 'post',
      url: 'https://ca.gcom.grainger.com/punchout/cxml',
      data: cXmlPunchCat,
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

  let cXmlPunchCat = `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE cXML SYSTEM "http://xml.cxml.org/schemas/cXML/1.2.028/cXML.dtd">
  <cXML payloadID="1527000523.2503@equallevel.com" timestamp="2018-05-22T14:48:43+00:00" version="1.0" xml:lang="en">
    <Header>
      <From>
        <Credential domain="NetworkId">
          <Identity>080230982</Identity>
        </Credential>
      </From>
      <To>
        <Credential domain="DUNS">
          <Identity>159148746</Identity>
        </Credential>
      </To>
      <Sender>
        <Credential domain="NetworkId">
          <Identity>080230982</Identity>
          <SharedSecret>805422672</SharedSecret>
        </Credential>
        <UserAgent>Qmerit ePro</UserAgent>
      </Sender>
    </Header>
    <Request deploymentMode="production">
      <PunchOutSetupRequest operation="create">
        <BuyerCookie>d2b6ae992225bd0a9894b5b37f183d81</BuyerCookie>
        <Extrinsic name="User">jdoe12345</Extrinsic>
        <Extrinsic name="UniqueUsername">jdoe12345</Extrinsic>
        <Extrinsic name="UserId">12345</Extrinsic>
        <Extrinsic name="UserEmail">info@equallevel.com</Extrinsic>
        <Extrinsic name="UserFullName">Erik Florida</Extrinsic>
        <Extrinsic name="UserPrintableName">Erik Florida</Extrinsic>
        <Extrinsic name="FirstName">Erik</Extrinsic>
        <Extrinsic name="LastName">Florida</Extrinsic>
        <Extrinsic name="PhoneNumber">555-555-5555</Extrinsic>
        <BrowserFormPost>
          <URL>http://localhost:3000/grainger-punch-in</URL>
        </BrowserFormPost>
        <SupplierSetup>
          <URL>https://ca.gcom.grainger.com/punchout/cxml</URL>
        </SupplierSetup>
        <ShipTo>
          <Address addressID="TEST">
            <Name xml:lang="en">TEST</Name>
            <PostalAddress>
              <Street>123 Street Address</Street>
              <City>Rockville</City>
              <State>MD</State>
              <PostalCode>20855</PostalCode>
              <Country isoCountryCode="US">US</Country>
            </PostalAddress>
          </Address>
        </ShipTo>
      </PunchOutSetupRequest>
    </Request>
  </cXML>`;

export default server;
