// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';

import {AppRegistry} from 'react-native';
// import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Root from './src/screens/auth/root';
import Splash from './src/screens/auth/Splash';
// import configureStore from './src/redux/store';

// const store = configureStore();

// const RNRedux = () => (
//   <Provider store={store}>
//     <Root />
//   </Provider>
// );
AppRegistry.registerComponent(appName, () => Root);
