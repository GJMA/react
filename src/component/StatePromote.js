import React from 'react'

class BoilingVerdict extends React.Component {
  render () {
    let content = null
    content = this.props.celsius >= 100 ? <p>水会烧开</p> : <p>水不会烧开</p>
    return (
      <div>
        {content}
      </div>
    )
  }
}

class StatePromote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      temperature: e.target.value
    })
  }

  render () {
    const temperature = this.state.temperature
    return (
      <div>
        <input type='number' value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict celsius={temperature}/>
      </div>
    )
  }
}

export default StatePromote