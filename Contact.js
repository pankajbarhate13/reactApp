import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Location} from 'google-maps-react';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// import getDirections from 'react-native-google-maps-directions'



export class Contact extends Component {

  constructor(props) {
      super(props);
    
      this.state = {
        selectedPlace: 'Ahmedabad',
        mapRegion: 'Goa_region',
        lat: 23.0436229,
        long: 72.5619155
      }
  };

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.01,
        longitudeDelta: 0.01
      }
      this.setState({lat: position.coords.latitude, long: position.coords.longitude})
    });
  }

  render() {
    var style = {
      width: '100%',
      height: '100%'
    }

    return (
      <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.long
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
        <Marker onClick={this.onMarkerClick}
                name={'Ahmedabad'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAL6hYg-SXVfq78PbFlYqBueSygSDZgORY')
})(Contact)


