import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import InputForm from './inputForm';


class InputScreen extends React.Component {
  state = {
    latitude: 33.703677,
    longitude: -117.846610,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    userRating: []
  }

  // submitUser will package latitdue and longitude of pin drop along with the data in userRating and
  // call addInput to send the package to the reducer to be save under userInput.
  // userRating's data is comming from inputForm, it is comprised of data from 
  submitUser = data => {
    console.log('button click')
    console.log(data);
    this.props.addInput({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      userRating: data	// this is from the <InputForm>  
    })
    // next, user will be navigated to the viewScreen component and the map will be rendered with the drop pin as the center location of the map
    // all previous user inputs will be rendered that is near the dropped pin
    this.props.navigation.navigate('view', {
      redirect: true,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })


  }

  // locate will convert the pin drop and convert it to latitude and longitude and set it to state
  locate = (coords) => {
    console.log('locate click')
    let latitude = coords.nativeEvent.coordinate.latitude;
    let longitude = coords.nativeEvent.coordinate.longitude;
    this.setState({
      latitude: latitude,
      longitude: longitude,
    },
      () => { console.log(this.state.latitude, this.state.longitude) },

    )
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeeeff' }}>
        <MapView
          style={{ height: 360, width: 360, marginBottom: 5 }}
          // provider="google"
          initialRegion={this.state}
          onPress={this.locate}
        >
          <MapView.Marker
            draggable
            onDragEnd={(e) => { console.log('dragEnd', e.nativeEvent.coordinate) }}
            coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
            title={"Your Selection"}
            description={""}
            pinColor='#6495ed'
          />
        </MapView>
        <InputForm
          submitUser={this.submitUser}
          position={this.state.position}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addInput: input => dispatch({ type: 'INPUT_DATA', newInput: input })
})

export default connect(null, mapDispatchToProps)(InputScreen);

