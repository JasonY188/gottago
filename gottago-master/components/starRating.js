import React, { Component } from 'react';
import { View } from 'react-native';
import Stars from 'react-native-stars';


class StarRating extends Component {

    render() {
        return (
            <View>
                <Stars
                    half={true}
                    default={2.5}
                    update={(val) => { this.props.changeRatings(val) }}
                    spacing={4}
                    starSize={25}
                    count={5}
                    fullStar={require('../assets/starFilled.png')}
                    emptyStar={require('../assets/starEmpty.png')}
                    halfStar={require('../assets/starHalf.png')}
                />
            </View>


        );
    }
}




export default StarRating;


            