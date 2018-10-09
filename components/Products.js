import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet,
    FlatList
} from 'react-native';

export default class Products extends Component {

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.products.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.listItem}
                            onPress={() => this.props.onPress(item, index)}>
                            <Text>{item.name + ' - ' + item.price}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    listItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    }
});