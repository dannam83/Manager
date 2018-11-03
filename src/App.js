import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';

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

// second argument of createStore is for passing any initial state
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
