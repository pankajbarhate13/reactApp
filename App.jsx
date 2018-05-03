import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import Users from './Users';
import Video from './Video';
import  Button  from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <div className="header">
              <img src="/images/reactjss.png"  /> 
               
            </div>
            <ul className="nav-menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Items'}>Items</Link></li>
                <li><Link to={'/Contact'}>Contact Us</Link></li>
                <li><Link to={'/Users'}>Users</Link></li>
                <li><Link to={'/Video'}>Video</Link></li>
            </ul>
            <hr />
             
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Items' component={Login} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Users' component={Users} />
                <Route exact path='/Video' component={Video} />
            </Switch>
          </div>
      </Router>
    );
  }
}
export default App;