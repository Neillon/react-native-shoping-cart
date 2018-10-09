import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Products extends Component {

    renderProducts = (products) => {
        return products.map((item, index) => (
            <TouchableOpacity key={index} style={{ padding: 20 }}
                onPress={() => this.props.onPress(item)}>
                <Text>{item.name + ' - ' + item.price}</Text>
            </TouchableOpacity>
        ))
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderProducts(this.props.products) }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});