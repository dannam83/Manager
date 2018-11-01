import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCNV9pmYxWfNgEWztI7aysJ7_M2TVfO6_8',
    authDomain: 'manager-804d7.firebaseapp.com',
    databaseURL: 'https://manager-804d7.firebaseio.com',
    projectId: 'manager-804d7',
    storageBucket: 'manager-804d7.appspot.com',
    messagingSenderId: '115631697306'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
