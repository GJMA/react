import React, { Component } from 'react';
import UserInfo from './UserInfo'

class Comment extends Component {
  render () {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <UserInfo user={this.props.author}></UserInfo>
        </div>
        <div>
          {this.props.text}
        </div>
        <div>
          {this.props.date}
        </div>
      </div>
    )
  }
}

export default Comment
