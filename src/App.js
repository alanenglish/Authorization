import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD8lX7e-RpEr4ImC6L5VM33f2UyhCiVrbE',
      authDomain: 'authentication-e3994.firebaseapp.com',
      databaseURL: 'https://authentication-e3994.firebaseio.com',
      projectId: 'authentication-e3994',
      storageBucket: 'authentication-e3994.appspot.com',
      messagingSenderId: '65307407205'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>My App</Text>
      </View>
    );
  }
}

export default App;
