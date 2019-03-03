import React from 'react'
import Icon from '../component/base/Icon'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      icon: 'LOGO'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      icon: 'GJMA'
    })
    console.log(this.state.icon)
  }

  render () {
    return (
      <div>
        <div className="section">
          <h1 className="section-title">icon</h1>
          <div className='section-item'>
          <Icon name="Logo" size="1" handleClick={this.handleClick}/>
          <Icon name="Logo" size="2" handleClick={this.handleClick}/>
          <Icon name="Logo" size="3" />
          <Icon/>
          </div>
        </div>
      </div>
    )
  }
}

export default Example
