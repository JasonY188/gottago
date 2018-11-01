import { MAP_DATA, INPUT_DATA, SUBMIT_DATA, RECEIVED_DATA, REQUESTED_DATA } from '../constants';
import { Data } from '../../data/index';
import { yelpData } from '../../data/yelp';


console.log('yelp data pt2')
console.log(yelpData);

const initalState = {

  userInput: Data,
  yelpData: yelpData,
  zipData: []

}
console.log("initialState")
console.log(initalState)



const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'INPUT_DATA':
      return {
        ...state,
        userInput: [...state.userInput, action.newInput]
      }

    case 'REQUESTED_DATA':
      return {
        ...state,
        zipData: action.data
      }


    default:
      return state;
  }
}

export default rootReducer;