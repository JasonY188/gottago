import React, { Component } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { getLocation } from './actions'
import { connect } from 'react-redux';


class HomeScreen extends Component {

    state = {
        zip: ''
    }

    static navigationOptions = {
        title: 'Home',
        header: null
    };

    //will take the user input zip code and navigate to the searchLocation component
    getZip = () => {
        this.props.navigation.navigate('search', { zip: this.state.zip })
        console.log(this.state.zip)
    }

    render() {

        return (

            <ImageBackground
                imageStyle={{
                    resizeMode: "stretch",
                }}
                style={{
                    flex: 1,
                    height: 700,
                    width: 400,
                    justifyContent: "space-evenly",
                    alignItems: 'center',

                }}
                source={require('../assets/toiletpaper.jpg')}>
                <View style={{
                    justifyContent: "space-evenly",
                    alignItems: 'center'
                }}>
                    <View style={{ alignItems: 'center', justifyContent: "space-evenly" }}>
                        <Image style={styles.logo} source={require('../assets/gottablue.png')} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('user')}>
                            <Text >NOW !!!</Text>
                        </TouchableOpacity>

                        <TextInput
                            placeholderTextColor="black"
                            underlineColorAndroid='rgba(0,0,0,0)'
                            textAlign='center'
                            onChangeText={zip => { this.setState({ zip }) }}
                            value={this.state.zip}
                            style={styles.textInput}
                            placeholder="Search by Zipcode"
                        />

                        <TouchableOpacity >
                            <Text style={{ fontSize: 20 }} onPress={this.getZip}>Go</Text>
                        </TouchableOpacity> */}

                </View>
                    <View style={{
                        justifyContent: "space-around",
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Enter a Restroom"
                            onPress={() => this.props.navigation.navigate('input')}
                        >
                            <Text>Leave your mark!</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        title="View submitted restroom"
                        onPress={() => this.props.navigation.navigate('view')}
                    >
                        <Text>See where others have gone</Text>
                    </TouchableOpacity>
                    <Image source={require('../assets/git.png')} />

                </View>
            </ImageBackground>
        );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    textInput: {
        backgroundColor: "white",
        opacity: 0.5,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        height: 40,
        width: 200,
        borderRadius: 10,
        borderColor: 'powderblue',
        borderWidth: 1,
        // marginBottom: 10
    },
    logo: {
        height: 190,
        width: 400,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: 'powderblue',
        // flexDirection: 'column',
        borderColor: 'powderblue',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        borderRadius: 10,
    },
});

