import React from 'react'
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import { IndexRoute } from 'react-router'
import App from '../App'
import Example from '../page/learn.js'
import Home from '../page/home.js'

export default class extends React.Component {
  render () {
    return (
      <Router>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
        </Route>
    </Router>
    )
  }
}