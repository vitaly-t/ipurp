import React from 'react';
import {render} from 'react-dom';
import App from './app/components/App';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './app/stylesheets/main.css';

require('es6-promise').polyfill();

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.querySelector('#app'));
