import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="gray-background">               
        <img src={logo} lat="logo" />
        <h2>let's develop management system!</h2>
      </div>
  );
  }
}

export default App;