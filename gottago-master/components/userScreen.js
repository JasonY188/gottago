import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';


class UserScreen extends Component {
  state = {
    latitude: 33.703677,
    longitude: -117.84661,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

}

componentDidMount() {
  this.fetchCoords();
}


// fetchCoords will get the current location and convert it to latitude and longitude, and set to state
fetchCoords = () => {

  console.log('clicked on user data')
  Geolocation.getCurrentPosition(
      (position) => {
          console.log(position);
          this.setState({
              latitude: (position.coords.latitude),
              longitude: (position.coords.longitude) //parseInt

          }, () => console.log("GET CURRENT POSITION INVOKED"))
      },
      (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );

}

  

render() {
  const { yelpData } = this.props;
  console.log("YELP_DATA", yelpData)
  return (
      <MapView
          style={{ flex: 1 }}
          // provider="google"
          showsUserLocation={true}
          followUserLocation={true}
          initialRegion={this.state}
          scrollEnables={true}
          region={this.state}
      >
          <MapView.Marker
              draggable
              onDragEnd={(e) => { console.log('dragEnd', e.nativeEvent.coordinate) }}
              pinColor='#ff3860'
              coordinate={this.state}
              title={"Current Location"}
              description={""}
          />
          {yelpData.map((marker, index) => (
              <MapView.Marker
                  key={index}
                  pinColor='#6495ed'
                  coordinate={{
                      latitude: marker.coordinates.latitude,
                      longitude: marker.coordinates.longitude
                  }}
                  // title={marker.userRating.business}
                  // description={marker.userRating.ratings + " stars  " + marker.userRating.comment}
              />
          ))
          }
      </MapView>

  );

}



}

const mapStateToProps = state => ({
  yelpData: state.yelpData
})

export default connect(mapStateToProps)(UserScreen);

// export default UserScreen;