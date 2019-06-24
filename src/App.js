import React, { Component } from 'react';
import './App.css';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch defaultChecked onChange={onChange} />
      </div>
    );
  }
}

export default App;