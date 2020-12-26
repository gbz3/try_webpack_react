import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Img from './150x150.png';
import './reset.css';

ReactDOM.render(
  <div>Hello World<img src={Img}></img></div>,
  document.getElementById('root')
);
