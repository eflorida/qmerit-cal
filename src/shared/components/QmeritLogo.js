import React from "react";
import logo from "../assets/qmerit_logo.png";

export function Logo() {
  const headerLogoStyles = {
    maxWidth: "220px",
    marginLeft: "24px"
  };

  return <img src={logo} alt="qmerit logo" style={headerLogoStyles} />;
}
