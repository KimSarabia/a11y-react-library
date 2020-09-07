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
    console.log("React.Children", React.Children);
    return React.Children.map(this.props.children, (item, i) => {
      if (i % 2 === 0) {
        let active = this.state.active === i ? 'true' : 'false';
        return <button
        role="tab"
        onClick = {this.select(i)}
        aria-selected={`${active}`}>
        {item}
        </button>;
      }
    });
  }

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div role='tabpanel' className='content'> {item} </div>;
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
      Tab 1
      <p>First Panel</p>
      Tab 2
      <p>Second Panel</p>
      Tab 3
      <p>Third Panel</p>
      </Tabs>
    );
  }
}

export default App;
