import React from 'react'

// 受控组件
// 非受控组件
class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleClick (e) {
    alert('name:' + this.state.value)
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <div onClick={this.handleClick}>click me!</div>
      </div>
    )
  }
}

class Textarea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleClick (e) {
    alert('name:' + this.state.value)
  }

  render () {
    return (
      <div>
        <textarea  value={this.state.value} onChange={this.handleChange}></textarea>  
        <div onClick={this.handleClick}>click me!</div>
      </div>
    )
  }
}

class Select extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'coconut'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleClick (e) {
    alert('name:' + this.state.value)
  }

  render () {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>  
        <div onClick={this.handleClick}>click me!</div>
      </div>
    )
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

class From extends React.Component {
  render () {
    return (
      <div>
        <Input />
        <Textarea />
        <Select />
        <Reservation />
      </div>
    )
  }
}

export default From
