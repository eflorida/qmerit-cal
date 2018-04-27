import React from "react";
import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}
