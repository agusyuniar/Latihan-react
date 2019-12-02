import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import home from './pages/home';
import home2 from './pages/home2';
import Login from './pages/awal';
import Navbar from './component/navbar';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Route path='/login' component= {Login} />
        <Route path='/home' component= {home} />
        <Route path='/bukan' component= {home2} />
      </div>
    )
  }
}

export default App;
