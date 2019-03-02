import React from 'react'

class Condition extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      isLoggledIn: true
    }
  }

  handleLogoutClick () {
    console.log(this)
    this.setState({
      isLoggledIn: false
    })
  }

  render () {
    const isLoggledIn = this.state.isLoggledIn
    let content = null
    // 1. if
    // if (isLoggledIn) {
    //   content = <h1 onClick={this.handleLogoutClick}>登录</h1>
    // } else {
    //   content = <h1>登出</h1>
    // }
    // 2. 三目运算符
    // 3. &&
    content = <h1 onClick={this.handleLogoutClick}>{isLoggledIn ? 'YES' : 'NO'}</h1>
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Condition
