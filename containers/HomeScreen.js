import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <TouchableOpacity 
        style={styles.card}
          onPress={() => { this.props.navigation.navigate('Electronics') }} >
          <Image style={styles.cardImage}
            source={require('./images/electronics.jpg')}
            resizeMode="contain" />
          <Text style={styles.cardText}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.card}
          onPress={() => { this.props.navigation.navigate('Books') }} >
          <Image style={styles.cardImage}
            source={require('./images/books.png')}
            resizeMode="contain" />
          <Text style={styles.cardText}>Books</Text>
        </TouchableOpacity>
      </ScrollView>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  card: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1
  },
  cardImage: {
    flex: 1,
  },
  cardText: {
    position: 'absolute',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    zIndex: 2000,
    bottom: 5,
    right: 8,
    fontWeight: 'bold',
    fontSize: 24,
  }
}