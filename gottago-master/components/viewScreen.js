import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';

class ViewScreen extends React.PureComponent {
    state = {
        latitude: 33.703677,
        longitude: -117.84661,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

    }


    componentDidMount() {
        console.log('test', this.props.navigation);
        if (this.props.navigation.getParam('redirect', false)) {
            this.updateMapCenter();
        } else {
            this.fetchCoords();
        }
    }


    updateMapCenter = () => {
        const { state } = this.props.navigation;
        const { latitude, longitude } = state.params;
        console.log("NEW LOCATION:")
        console.log(latitude, longitude);

        this.setState({
            latitude: latitude,
            longitude: longitude
        });
    }

    fetchCoords = () => {

        // this.props.navigation ? console.log(this.props.navigation) : console.log('no nav props');

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
        const { inputData } = this.props;
        console.log("INPUTDATA", inputData)
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
                {inputData.map((marker, index) => (
                    <MapView.Marker
                        key={index}
                        pinColor='#6495ed'
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude
                        }}
                        title={marker.userRating.business}
                        description={marker.userRating.ratings + " stars  " + marker.userRating.comment}
                    />
                ))
                }
            </MapView>

        );

    }



}

const mapStateToProps = state => ({
    inputData: state.userInput
})

export default connect(mapStateToProps)(ViewScreen);




