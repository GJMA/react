import React from 'react'
import Hello from '../component/Hello'
import Comment from '../component/Comment'
// import Clock from './component/Clock.js'
// import Events from './component/Events.js'
// import Condition from './component/Condition.js'
// import Items from './component/Items.js'
// import From from './component/Input.js'
// import StatePromote from './component/StatePromote.js'

const common = {
  author: {
    name: 'GJMA',
    avatarUrl: './logo.svg'
  },
  text: 'good',
  date: new Date().toLocaleTimeString()
}

class Example extends React.Component {
  render () {
    return (
      <div className="App">
        <Hello></Hello>
        <Hello user={{firstName: 'wang', lastName: 'li'}}></Hello>
        <Comment
          author={common.author}
          text={common.text}
          date={common.date}
        >
        </Comment>
        {/* <Clock />
        <Clock />
        <Clock />
        <Events />
        <Condition />
        <Items />
        <From />
        <StatePromote /> */}
      </div>
    )
  }
}

export default Example
