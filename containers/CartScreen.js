import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Products from '../components/Products';
import { connect } from 'react-redux';

class CartScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <Products 
                        onPress={this.props.removeItem}
                        products={this.props.cartItems} /> :
                    <Text>No items in your cart</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product, index) => {
            dispatch({ type: 'REMOVE_FROM_CART', payload: { ...product, index } })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}