import React, { Component } from 'react';

class Hello extends Component {
  render () {
    return <h1 tabIndex='1'>Hello, {this.props.user.firstName +  ' ' + this.props.user.lastName}</h1>
  }
}

// 为属性指定默认值:
Hello.defaultProps = {
  user: {
    firstName: 'GJMA',
    lastName: 'zhang'
  }
};

export default Hello
