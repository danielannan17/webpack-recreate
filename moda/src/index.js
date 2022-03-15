import React from 'react';
import ReactDOM from 'react-dom';
import Actor from './actor.js'


let actor = new Actor()
actor.sendData('data')

ReactDOM.render(
    <h1>Hello World</h1>,
  document.getElementById('root')
);