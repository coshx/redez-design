import React, { Component } from 'react';
import './App.css';
import Master from './components/Master'
import Detail from './components/Detail'

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

export default App;
