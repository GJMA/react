import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from './router/index.js'

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
