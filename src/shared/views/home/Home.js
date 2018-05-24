import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {graingerUrl: undefined, fetching: false};

    this.fetchPunchout = this.fetchPunchout.bind(this);
    this.udpateUrl = this.udpateUrl.bind(this);
    this.getPunchOut = this.getPunchOut.bind(this);
  }

  fetchPunchout() {
    this.setState((previousState)=> {
      return({
        ...previousState,
        fetching: true
      });
    })
    fetch('/grainger-punch-out', {
      method: 'POST',
    }).then(response => {
      return response.json();
    }).then(data => {
      this.udpateUrl(data.punchOutUrl);
    });
  }

  udpateUrl(url) {
    this.setState((previousState)=> {
      return({
        ...previousState,
        fetching: false,
        graingerUrl: url
      });
    });
  }

  getPunchOut() {
    if(this.state.graingerUrl){
      return (
        <iframe title="Grainger Punch Out Site" sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" src={this.state.graingerUrl} width="100%" height="1800px;"></iframe>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    let GraingerPunchOut = this.getPunchOut;

    return (
      <main role="main" className="punchout-container">
        <div onClick={this.fetchPunchout} type="submit" style={{ display: this.state.graingerUrl ? 'none' : 'block', margin: 'auto', cursor:'pointer'}} href="" title="Grainger">
          <img style={{ display: 'block', margin: 'auto', marginTop: '128px', width:'244px'}} src="data:image/png;base64,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" alt="Grainger logo" />
          <h3 style={{ textAlign: 'center' }}>Shop Now</h3>
        </div>
        <img style={{display: this.state.fetching ? 'block' : 'none', margin: 'auto', width:'120px'}} src="https://www.srlworld.com//campaign-forms/new-landingpg/loading.gif" alt="loading" />
        <GraingerPunchOut />
      </main>
    );
  }
}