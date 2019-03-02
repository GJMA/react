import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // 挂载完成
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick()
    )
  }
  // 销毁
  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  test (e) {
    console.log(e)
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2 onClick={this.test}>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock
