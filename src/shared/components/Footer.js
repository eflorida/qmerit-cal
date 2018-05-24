import React from "react";

class Footer extends React.Component {
  render() {
    const footerStyles = {
      backgroundColor: "#3B64C2",
      textAlign: "center",
      paddingTop: 12,
      paddingBottom: 12,
      bottom: 0,
      // position: "fixed",
      width: "100%"
    };
    const footerTextStyles = {
      color: "#ffffff"
    };

    return (
      <div style={footerStyles}>
        <h4 style={footerTextStyles}>A Qmerit Production</h4>
      </div>
    );
  }
}

export default Footer;
