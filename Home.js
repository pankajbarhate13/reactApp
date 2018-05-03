import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Home extends Component {
   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               // transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
          
               <h1>This is home page...</h1>
            </ReactCSSTransitionGroup>
         </div>
      );
   }
}
export default Home;