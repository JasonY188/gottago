// axios
import { RECEIVED_DATA, REQUESTED_DATA, INPUT_DATA } from '../constants';
import axios from 'axios';

// will make a request to express server at port 3000, server at port 3000 will make a get request to Yelp API
export const getLocation = (zip) => dispatch => {
    axios.get(`http://localhost:3000?location=${zip}&radius=500`)
       .then(response =>{
           console.log('response:', response.data)
           dispatch({type: REQUESTED_DATA, data: response.data })
       })
}

// export const sendData = data => ({ type: REQUESTED_DATA, newInput: input })

// will add user input data to the reducer
export const addInput = input => ({ type: INPUT_DATA, newInput: input })




