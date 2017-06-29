/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

export default class Products extends Component {
  render() {
    return (
        <WebView
          source={require('./Prova.html')}
        />  
    );
  }
}


AppRegistry.registerComponent('Products', () => Products);
