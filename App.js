/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import store from './store'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <ShoppingCart />
      </Provider>
    );
  }
}