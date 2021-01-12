import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Main from './components/Main';
import Details from './components/Details';
import Form from './components/Form';
import About from './components/About';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact={true} path='/' component={Main}></Route>
            <Route exact path='/stuff/:id' component={Details}></Route>
            <Route exact path='/add' component={Form}></Route>
            <Route exact path='/about' component={About}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
