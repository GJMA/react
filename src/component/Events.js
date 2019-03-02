import React from 'react'

class Events extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id, e) {
    console.log('click', this, id)
    // e.preventDefault()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (
      <div>
        <button onClick={(e) => this.handleClick(1, e)}>
          Click me!
          {this.state.isToggleOn ? 'NO' : 'OFF'}
        </button>
        <button onClick={this.handleClick.bind(this, 2)}>
          Click me!
          {this.state.isToggleOn ? 'NO' : 'OFF'}
        </button>
      </div>
    )
  }
}

export default Events
