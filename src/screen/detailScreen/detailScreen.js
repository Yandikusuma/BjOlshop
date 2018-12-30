import React, { Component, version } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ProductDetail from '../../container/ProductDetail';
import {data} from '../../data/Data';



class DetailScreen extends Component{
	static navigatorStyle = { 
		tabBarHidden: true,
		navBarHidden: true
	}
	render(){
		return(
			<View style={{flex: 1}}>
			  <ProductDetail products={data} navigator={this.props.navigator}/>
			</View>
		)
	}
}

export default DetailScreen