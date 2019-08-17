import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {

  state = {
    data: ''
  }

  componentDidMount() {
    
    fetch('/special')
            .then(res => {
                console.log(res);
                return res.text()
             })
            .then(dataz => { 
                console.log(dataz); 
                this.setState({ data: dataz })
             });
         
  
  }


  render() {
    return (
         <div className="App">
    <h1>Which MacBook ???</h1>
 <Button variant="contained" color="primary" >Submit</Button>
 <h5> wowerz   {this.state.data}</h5>
 </div>

 )
   }


 }
 
 export default App;
  