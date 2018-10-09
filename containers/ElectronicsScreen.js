import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { electronics } from '../data';
import Products from '../components/Products';
import { connect } from 'react-redux';

class ElectronicsScreen extends Component {

  static navigationOptions = {
    headerTitle: 'Electronics'
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FFF' }}>
        <Products products={electronics} onPress={this.props.addItemToCart} />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen)
