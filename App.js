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
import TabBarFooter from './src/component/tabBarFooter'
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import store from './src/store/index';



registerScreen(store, Provider);

function createTab(){
  TabBarFooter()
}

createTab()
