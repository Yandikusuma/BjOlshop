import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';


export default class ContentPantsPria extends Component{
	render(){
		return(
			<View>
				<View style={styles.container}>
					 <View style={styles.containerContent}>
						 <TouchableOpacity>
						   <View>
						     <Image />
							 </View>
							 <View>
							   <Text></Text>
							 </View>
							 
						 </TouchableOpacity>
					 </View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	containerContent: {
		flex: 1,
		flexDirection: 'column'
	}
})