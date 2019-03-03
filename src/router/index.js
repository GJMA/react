import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import App from '../App'

import Home from '../page/home.js'
import Test from '../page/test.js'
import Message from '../page/message.js'
import Example from '../page/example.js'

const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/home" component={Home} />
                     <Route path="/example" component={Example} />
                     <Route path="/test" component={Test} />
                     <Route path="/message/:id" component={Message} />
                      {/*路由不正确时，默认跳回home页面*/}
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
)

export default Root
