import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


class ContentShirt extends Component{
	render(){
		return(
			<View>
				<View style={styles.container}>
				  <View style={styles.containerContent}>
				    <TouchableOpacity>
				    	 <View style={styles.imageView}>
				    		<Image 
				    		  style={styles.imageContent}
				    		  source={require('../../../image/pakaian-pria.jpg')}
				    		/>
				    	 </View>
				    	 <View>
				    		<Text>merk</Text>
				    		<Text>harga</Text>
				    	 </View>
						</TouchableOpacity>
					</View>
					<View style={styles.containerContent}>
					  <TouchableOpacity>
					     <View style={styles.imageView}>
				    		<Image 
				    		  style={styles.imageContent}
				    		  source={require('../../../image/pakaian-pria.jpg')}
				    		/>
				    	 </View>
				    	 <View>
				    		<Text>merk</Text>
				    		<Text>harga</Text>
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
		marginTop: 50,
		backgroundColor: 'white',
		padding: 10,
		flexDirection: 'column'
	},
	imageView: {
		alignItems: 'center',
		borderColor : '#ddd',
		borderWidth : 1.5,
	},
	imageContent: {
		width: 100,
		height: 100
	}
})

export default ContentShirt