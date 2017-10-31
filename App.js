import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './scr/reducers'

import Router from './scr/Router'

export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA8UMhyQochzDbzU4bwtMhf2d-BurboCK4',
      authDomain: 'manager-5b74e.firebaseapp.com',
      databaseURL: 'https://manager-5b74e.firebaseio.com',
      projectId: 'manager-5b74e',
      storageBucket: 'manager-5b74e.appspot.com',
      messagingSenderId: '337541806016'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


