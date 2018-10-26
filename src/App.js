import React, { Component } from 'react'
import './App.css'
import { DragDropContext } from 'react-dnd'
import Master from './components/Master'
import Canvas from './components/Canvas'
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    return (
      <div>
        < Canvas />
        < Master />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)