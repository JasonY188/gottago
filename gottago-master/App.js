/**
 *    README:
 * 
 *    This is a basic setup that has most of the npm packages and settings that
 *    you'll want for a project (keep it as a reference)
 *    
 *    Included npm packages that you'd have to install yourself if setting up from scratch:
 *    -> axios
 *    -> react-redux
 *    -> redux
 *    -> redux-thunk
 *    -> react-navigation
 *    
 *    Redux is setup with both thunk applied and react navigation wrapped.
 *    There is a folder structure for redux available in 'components' as well
 */
import React from 'react';

// Imports to setup Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers';

// Imports to setup React Navigation
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/homeScreen';
import UserScreen from './components/userScreen';
import InputScreen from './components/inputScreen';
import ViewScreen from './components/viewScreen';
import SearchLocation from './components/searchLocation';
// This is the same as how you'd setup Redux in regular React (JS)
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const RootStack = createStackNavigator(
  {
    home: HomeScreen,
    user: UserScreen,
    input: InputScreen,
    view: ViewScreen,
    search: SearchLocation,
  },
  {
    initialRouteName: 'home'
  }
)

// Note that you will wrap your <Provider> around your main stack navigator rather than 
// <MainPage /> or another React component
const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

export default App;
