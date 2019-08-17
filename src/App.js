import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {

  state = {
    data: ''
  }
  render() {
    return (
      <div>
         <div className="App">
    <h1>Which MacBook ???</h1>
 <Button variant="contained" color="primary" >Submit</Button>
    </div>
      </div>
    )
  }
}

export default App


