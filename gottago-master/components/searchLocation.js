import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { getLocation } from './actions'

class SearchLocation extends Component {
    state = {
        latitude: 33.703677,
        longitude: -117.84661,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

        
    }

    // zip is pass to searchLocation from homeScreen
    // getLocation is the axios get call to express server
    componentDidMount() {
        let zip = this.props.navigation.getParam('search', '92708')
        console.log(zip)
        this.props.getLocation(zip);
        console.log('Did this run')
    }

    render() {
        // zipData is the data retrieved from the axios get of the Yelp API
        // the returned data are locations near the zip, locations are mapped with MapView.Marker
        const { zipData } = this.props
        console.log( zipData);
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
                {
                    zipData.businesses && zipData.businesses.map((marker, index) => (
                    <MapView.Marker
                        key={index}
                        pinColor='#6495ed'
                        coordinate={{
                            latitude: marker.coordinates.latitude,
                            longitude: marker.coordinates.longitude
                        }}
                        title={marker.name}
                        // description={marker.userRating.ratings + " stars  " + marker.userRating.comment}
                    />
                ))
                }
            </MapView>
      
        );
      
      }





}

const mapStateToProps = state => ({
    zipData: state.zipData
})

const mapDispatchToProps = dispatch => ({
    getLocation: zip => dispatch(getLocation(zip))
})

  export default connect(mapStateToProps, mapDispatchToProps)(SearchLocation);  

