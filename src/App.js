import React, { Component } from 'react';
import './App.css';
import route from '../src/route'
import Header from './component/Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
     {route}
     <Header/>
     
      </div>
    );
  }
}

export default App;
