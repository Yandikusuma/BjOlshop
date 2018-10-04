/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomeScreen from './src/screen/home/homeScreen'
import Content from './src/component/content'
import { View} from 'react-native';


export default class App extends Component{
  render() {
    return (
      <View>
        <Content />
      </View>
    );
  }
}

