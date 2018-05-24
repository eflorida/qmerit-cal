import React from "react";

export class EmbedtoCart extends React.Component {
  componentDidMount(){
    window.top.location.href = '/cart';
  }
  render(){
    return <div></div>
  }
}

