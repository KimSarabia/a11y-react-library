import React, { Component } from 'react';
// import Tabs from './Tabs';
// import Panel from './Panel';

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }

  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({ active: i });
    }
  }

  renderTabs = () => {
    return ['tab 1', 'tab 2', 'tab 3'].map((item, i) => {
      let active = this.state.active === i ? 'true' : 'false';
      return <button
      key={i}
      role="tab"
      onClick = {this.select(i)}
      aria-selected={`${active}`}>
      {item}
      </button>;
    });
  }


  renderContent() {
    return ['panel 1', 'panel 2', 'panel 3'].map((item, i) => {
      if (i === this.state.active) {
        return <div key={i} role='tabpanel' className='content'> {item} </div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Tabs>
      </Tabs>
    );
  }
}

export default App;
