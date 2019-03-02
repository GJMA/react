import React, { Component } from 'react';
import Avatar from './Avatar'

class UserInfo extends Component {
  render () {
    return (
      <div>
        <Avatar user={this.props.user}/>
        <div>
          {this.props.user.name}
        </div>
      </div>
    )
  }
}

export default UserInfo
