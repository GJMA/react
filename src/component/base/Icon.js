import React from 'react'

class Icon extends React.Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      name: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    let handleClick = this.props.handleClick || false
    if (handleClick) {
      this.props.handleClick()
    }
  }

  render () {
    return (
      <i 
        className={`gjmaIcon gjamIcon${this.props.name}`}
        style={{width: this.props.size * 16, height: this.props.size * 16}}
        onClick={this.handleClick}
      >
      </i>
    )
  }
}

export default Icon
