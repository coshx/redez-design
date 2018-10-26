import React, { Component } from 'react'
import './App.css'
import { DragDropContext } from 'react-dnd'
import Master from './components/Master'
import Detail from './components/Detail'
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    return (
      <div>
        < Master />
        < Detail />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)