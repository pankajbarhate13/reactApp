import React from 'react';
import { Player } from 'video-react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

 
class Video extends React.Component {
 
  constructor (props) {
    super(props);
    this.state = {
      muted: false,
      source: [
        {
          src: 'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4',
          type: 'video/mp4'
        }
      ]
    };
  }
 
 
 
  render () {
    // a basic style object 
    const VideoStyle = {
        backgroundColor: 'green'
    };
 
    return (
      <div>
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </div>
      

        
    );
  }
};
 
export default Video;