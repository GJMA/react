import React from 'react'

class Items extends React.Component {
  render () {
    const numbers = [1, 2, 4, 8, 10]
    const listItems = numbers.map(number => 
      <li key={number.toString()}>{number}</li> 
    )

    return (
      <ul>{listItems}</ul>
    )
  }
}

export default Items