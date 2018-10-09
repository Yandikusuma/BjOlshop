/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { registerScreen, registerScreenVisibilityListener } from './src/screen/auth/index';
import {Navigation} from 'react-native-navigation';


registerScreen();

Navigation.startSingleScreenApp({
  screen: {
      screen: 'HomeScreen',
      navigatorStyle: {
        tabBarHidden: true
    }
  },
})

