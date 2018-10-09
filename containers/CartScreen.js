import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Products from '../components/Products';
import { connect } from 'react-redux';

class CartScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Cart'
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection: 'column' }} >
                {this.props.cartItems.length > 0 ?
                    <ScrollView>
                        <Products
                            onPress={this.props.removeItem}
                            products={this.props.cartItems} />
                    </ScrollView> :
                    <EmptyCart />
                }
            </View>
        );
    }
}

const EmptyCart = (props) => {
    return (
        <View style={{
            flex: 1,
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                color: '#F00',
                fontSize: 20
            }}>No items in your cart</Text>
        </View>
    )
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
