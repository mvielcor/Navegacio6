/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class
 * @summary Classe base per a iniciar una app en React Native amb Navegació (react-navigation/native v.6)
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Pantalla1} from './screens/Pantalla1';
import {Pantalla2} from './screens/Pantalla2';
import {Pantalla3} from './screens/Pantalla3';

// Creem la pila de navegació com a variable GLOBAL
const pilaNavegacio = createNativeStackNavigator();

class App extends Component {
  pantallaPrincipal = ({navigation}) => {
    return (
      <View style={styles.contenidor}>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text> Pantalla Inici </Text>
          <Button
            title="Pantalla 1"
            onPress={() => navigation.navigate('Pantalla 1')}
          />
          <Button
            title="Pantalla 2"
            onPress={() => navigation.navigate('Pantalla 2')}
          />
        </View>
      </View>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <pilaNavegacio.Navigator>
          <pilaNavegacio.Screen
            name="Inici"
            component={this.pantallaPrincipal}
          />
          <pilaNavegacio.Screen name="Pantalla 1" component={Pantalla1} />
          <pilaNavegacio.Screen name="Pantalla 2" component={Pantalla2} />
          <pilaNavegacio.Screen name="Pantalla 3" component={Pantalla3} />
        </pilaNavegacio.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
