import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { electronics } from '../data';
import Products from '../components/Products';
import { connect } from 'react-redux';

class ElectronicsScreen extends Component {

  static navigationOptions = {
    headerTitle: 'Electronics'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Products products={electronics} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen)