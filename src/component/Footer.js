import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component {

  render () {
    return (
      <ul className='footer'>
        <li><Link to={`/index`}>首页</Link></li>
        <li><Link to={`/index`}></Link></li>
        <li><Link to={`/index`}></Link></li>
      </ul>
    )
  }
}

export default Footer
