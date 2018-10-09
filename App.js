/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import store from './store'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});
