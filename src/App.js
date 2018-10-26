import React, { Component } from 'react'
import './App.css'
import { DragDropContext } from 'react-dnd'
import Master from './components/Master'
import Canvas from './components/Canvas'
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    let logo = require('./images/redez_logo.png')
    return (
      <div>
        <img src={logo} alt={"redez logo"} style={{ display: 'block', width: '20%' }} />
        < Canvas />
        < Master />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)