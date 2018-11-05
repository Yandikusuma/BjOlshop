import React, { Component }from 'react';
import { View,StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'



class TabBar extends Component{
	onPressMarket = () =>{
		this.props.navigator.push({
			screen: 'Keranjang'
		})
	}
	render(){
		return(
			<LinearGradient colors={[ '#00001a', '#00001a']} style={styles.viewSearch}>
			  <View style={styles.viewInput}>
			    <Text style={styles.textTitle}>Welcome To BjOlshop</Text>
			  </View>
				<View style={styles.buttonIconS}>
				  <TouchableOpacity 
				       onPress={this.onPressMarket}
			    >
			    	<Icon name="shopping-basket" size={30} style={{color:'#bfbfbf'}}/>
				  </TouchableOpacity>
				</View>
		  </LinearGradient>
		)
	}
}
const styles = StyleSheet.create({
	viewSearch: {
		padding : 15,
		flexDirection: 'row',
		justifyContent: 'space-between',

		
	},
	viewInput:{
		flex: 1,
	},
	textTitle: {
		color: '#63d7cc',
		fontSize: 20
	},
	inputSearch: {
		fontSize:16,
		borderRadius:10,
		paddingLeft: 10,
	},
	buttonIconS: {
		justifyContent: 'center',
		alignItems: 'center'
	}
	
	
})

export default TabBar


