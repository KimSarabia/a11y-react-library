import React, {Component} from 'react'

export default class Panel extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
};

// export default Panel;
