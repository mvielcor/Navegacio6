/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

export class Pantalla2 extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text> Pantalla 2 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenidor: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    alignContent: 'space-around',
    alignItems: 'center',
  },
});

export default Pantalla2;
