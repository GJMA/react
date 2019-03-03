import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.scss'
import * as serviceWorker from './serviceWorker';
import Root from './router/index.js'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'))

serviceWorker.unregister();
