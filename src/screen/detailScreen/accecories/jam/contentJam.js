import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default class ContentJam extends Component{
	render(){
		return(
			<View>
			  <View style={styles.container}>
			  	<View style={styles.containerContent}>
			  		<TouchableOpacity>
			  			<View style={styles.imageView}>
			  				<Image 
			  					style={styles.imageContent}
			  					source={require('../../../../../image/jam.jpeg')}
			  				/>
			  			</View>
			  			<View style={styles.text}>
								<Text>Merek: </Text>
			  			  <Text>Harga: </Text>								
			  			</View>
			  		</TouchableOpacity>
			  	</View>
			  	<View style={styles.containerContent1}>
			  		<TouchableOpacity>
			  			<View style={styles.imageView}>
			  				<Image 
			  					style={styles.imageContent}
			  					source={require('../../../../../image/jam1.jpeg')}
			  				/>
			  			</View>
			  			<View style={styles.text}>
								<Text>Merek: </Text>
			  			  <Text>Harga: </Text>								
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
		margin: 3,
		backgroundColor: 'aqua',
		flexDirection: 'column'
	},
	containerContent1: {
		flex: 1,
		margin: 3,
		backgroundColor: 'aqua',
		flexDirection: 'column'
	},
	imageView: {
		alignItems: 'center'
	},
	imageContent: {
		width: '100%',
		height: 200
	},
	text: {
		backgroundColor: 'red',
		paddingLeft: 10
	}
})