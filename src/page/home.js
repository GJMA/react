import React from 'react'
import {
  Link
} from 'react-router-dom'

class About extends React.Component {

  render() {
    return (
      <div id="home-container">
        <h1>react学习</h1>
        <Link to={{pathname: '/example'}}>Example</Link>
        {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
        <Link to={{ pathname: '/test', search: '?name=homename', state: { mold: 'add' }, aa: 'dddd' }} className="home-link">
          点击跳转到路由参数search，state使用
              </Link>

      </div>
    )
  }
}

export default About
