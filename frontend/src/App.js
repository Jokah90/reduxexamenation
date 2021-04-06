import React from 'react';
import './App.css';
// Import the Route.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage.js';
import Nav from './components/Nav.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import Cart from './components/Cart.js';
import Status from './components/Status.js';
import LogIn from './components/LogIn.js';
import Profile from './components/Profile.js';


function App() {


  return (
    <div className="flex-container">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/nav" component={Nav} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/status" component={Status} />
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
