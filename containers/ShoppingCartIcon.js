import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const ShoppingCartIcon = (props) => (
    <TouchableOpacity style={{ padding: 5 }} onPress={() => props.navigation.navigate('Cart') } >
        <View style={{
            position: 'absolute', width: 30, height: 30, backgroundColor: 'rgba(95, 197, 123, 0.8)', zIndex: 200,
            alignItems: 'center', justifyContent: 'center', right: 15, bottom: 15, borderRadius: 15
        }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>{ props.cartItems.length }</Text>
        </View> 
        <Icon name="shopping-cart" size={30} />
    </TouchableOpacity>
);

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));
