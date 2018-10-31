import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TabBarFooter from '../../component/tabBarFooter';
import Icon from 'react-native-vector-icons/FontAwesome';



class Keranjang extends Component{
	static navigatorStyle = {
		navBarHidden: true
	}
	constructor(props){
		super(props)
		this.state = { 
		}
	}

	render(){
		return(
			<View>
			  <TouchableOpacity>
				  <View style={styles.container}>
				  	<View style={styles.iconGambar}>
						</View>
				  	  <View style={styles.text}>
						  	<Text>Merek: </Text>
						  	<Text>Harga: </Text>
				  	    <Text></Text>							
							</View>
							<View style={styles.delate}>
						    <TouchableOpacity>
					       <Text>hahah</Text>
							  </TouchableOpacity>
							</View>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'grey',
		height: 80,
		flexDirection: 'row',
		marginTop: 10,
	},
	iconGambar: {
		backgroundColor: 'red',
		width: 100
		
	},
	text: {
		flexDirection: 'column',
		marginLeft: 10
	},
	delate: {
		marginLeft: 170,
		backgroundColor: 'aqua',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80
	}
})

export default Keranjang