import React from "react";
import { Logo } from "../components/QmeritLogo";

class Footer extends React.Component {
  render() {
    const headerStyles = {
      backgroundColor: "#3B64C2",
      textAlign: "left",
      paddingTop: 12,
      paddingBottom: 12,
      top: 0,
      position: "fixed",
      width: "100%"
    };

    return (
      <div style={headerStyles}>
        <Logo />
      </div>
    );
  }
}

export default Footer;
