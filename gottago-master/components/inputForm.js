import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import StarRating from './starRating';
import { connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import radios from './radio'

// this is the inputForm component which will let the user add a location name, comments, star ratings,
// and radio button ratings to the pin drop
// all the user input will be packaged and stored in the userRating array in the inputScreen

class InputForm extends React.Component {
    state = {
        ratings: "",
        business: "",
        comment: "",
        valueOne: 'public',      // is public 0  or private 1
        valueTwo: 'free',      // is free 0 or paid 1
        valueThree: 'clean',    // is clean 0 or not 1
        valueFour: 'accessible',     // is accessible 0 or not 1
    }

    // this allows saving the value of the star ratings given by the user ex. 1 star, 2.5 stars, 3.5 stars
    changeRating = (val) => {
        this.setState({
            ratings: val,
        })
    }

    render() {
        let { radioPropsOne, radioPropsTwo, radioPropsThree, radioPropsFour } = radios;
        let { ratings, business, comment, valueOne, valueTwo, valueThree, valueFour } = this.state
        let { textInput, addRestroomButton, radio, radioButton, title, container } = styles;
        return (
            <View style={container}>
                <Text style={title}> Give it stars</Text>
                <StarRating 
                    changeRatings = {this.changeRating}
                    style = {{marginTop: 40}}
                />
                
                <TextInput
                    placeholder=' Location name'
                    textAlign='left'
                    onChangeText={business => { this.setState({ business }) }}
                    value={business}
                    style={textInput}
                />
                <TextInput
                    placeholder=' Type any comments here'
                    textAlign='left'
                    onChangeText={comment => { this.setState({ comment }) }}
                    value={comment}
                    style={textInput}
                />
                <View style={[radio, {alignItems: 'center', justifyContent: 'center'}]}>
                    <RadioForm
                        radio_props={radioPropsOne}
                        initial={0}
                        buttonColor={'#2196f3'}
                        onPress={(valueOne) => { this.setState({ valueOne }) }}
                        style={radioButton}
                    />
                    <RadioForm
                        radio_props={radioPropsTwo}
                        initial={0}
                        buttonColor={'#2196f3'}
                        onPress={(valueTwo) => { this.setState({ valueTwo }) }}
                        style={radioButton}
                    />
                    <RadioForm
                        radio_props={radioPropsThree}
                        initial={0}
                        buttonColor={'#2196f3'}
                        onPress={(valueThree) => { this.setState({ valueThree }) }}
                        style={radioButton}
                    />
                    <RadioForm
                        radio_props={radioPropsFour}
                        initial={0}
                        buttonColor={'#2196f3'}
                        onPress={(valueFour) => { this.setState({ valueFour }) }}
                        style={radioButton}
                    />

                    <TouchableOpacity
                        onPress={() => this.props.submitUser(this.state)}
                        style={addRestroomButton}
                        textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                    > <Text>Submit your Pick</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default InputForm;

const styles = StyleSheet.create({
    container: {
       
        marginTop: 20,
        backgroundColor: '#eeeeff',
        
    },
    textInput: {
        backgroundColor: 'white',
        height: 30,
        width: 300,
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        color: '#363635',
        fontWeight: 'bold',
        fontSize: 20
    },
    addRestroomButton: {
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 120,
        borderRadius: 5,
        marginLeft:20,
    },
    radio: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    radioButton: {
        margin: 5,
        padding: 5,
    }
});