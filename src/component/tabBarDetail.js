import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class TabBarDetail extends Component{
	onPressMarket = () => {
		this.props.navigator.push({
			screen: 'Keranjang'
		})
	}
	render(){
		return(
			<View style={styles.container}>
			  <View style={styles.navBar}>
				  <View style={styles.viewText}>
				    <Text style={{fontSize: 20, color: '#fff'}}>Detail Product</Text>
				  </View>
					<View style={styles.iconMarket}>
				    <TouchableOpacity 
				      onPress={this.onPressMarket}
						>
						  <View style={styles.textMarket}>
						    <Text style={{color: '#fff'}}>0</Text>
					    </View>
		          <Icon name="shopping-basket" size={30} style={{color:'#fff'}}/>
	          </TouchableOpacity>
				  </View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	},
	navBar: {
		backgroundColor: '#0059b3',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 15
	},
	viewText: {
		marginLeft: 20
	},
	iconMarket: {
		marginRight: 20
	},
	textMarket: {
		position: 'absolute',
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: '#666666',
		right: 18,
		bottom: 5,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2000
	}
})

export default TabBarDetail