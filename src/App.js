import React, { Component } from 'react';
import './App.css';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
 
    return (

      
         <div className="App">
   <Router>
        <div>
          <ul>
            <li className="active"><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
        
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
   


 </div>

 )
   }


 }
 
 export default App;
  