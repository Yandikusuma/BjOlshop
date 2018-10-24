import React, { Component }from 'react';
import { View,StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class TabBar extends Component{
	onPressMarket = () =>{
		this.props.navigator.push({
			screen: 'Keranjang'
		})
	}
	render(){
		return(
			<View style={styles.viewSearch}>
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
		  </View>
		)
	}
}
const styles = StyleSheet.create({
	viewSearch: {
		padding : 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#0f2362'

		
	},
	viewInput:{
		flex: 1,
	},
	textTitle: {
		color: '#fff',
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


