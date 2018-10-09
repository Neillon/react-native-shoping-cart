import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Electronics'}
          onPress={() => { this.props.navigation.navigate('Electronics') }} ></Button>
        <Button
          title={'Books'}
          onPress={() => { this.props.navigation.navigate('Books') }} ></Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}