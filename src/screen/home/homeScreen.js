import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class HomeScreen extends Component{
	constructor(props){
		super(props)
		this.state = { text : ''}
	}
	render(){
		return(
			  <View style={{flex:1}}>
			    	<View style={{backgroundColor: 'red'}}>
							 <View>
							   <Text>hahhhahh</Text>
			    		 </View>
			    	</View>
				</View>
		)
	}
}

export default HomeScreen