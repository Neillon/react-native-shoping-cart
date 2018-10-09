import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';

export default class ShoppingCart extends Component {

    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
}, {
        navigationOptions: {
            headerTitle: 'Shopping App',
            headerRight: <ShoppingCartIcon />
        }
    })

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}