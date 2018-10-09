import React, { Component }from 'react';
import { View,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class TabBar extends Component{
	render(){
		return(
			<View style={styles.viewSearch}>
			  <View style={styles.viewInput}>
			  	<TextInput 
			  		style={styles.inputSearch}
			  		placeholderTextColor="#737373"
			  		placeholder="Search your favorit"
			  		onChangeText={(text) => this.setState({text})}
			  	/>
			  	<TouchableOpacity>
			  		<Icon name="search" size={20} style={styles.iconSearch}/>
			  	</TouchableOpacity>
			  </View>
			  <TouchableOpacity 
			  		 style={styles.buttonIconS}
			  >
			  	<Icon name="shopping-basket" size={30} style={{color:'#bfbfbf'}}/>
			  </TouchableOpacity>
		  </View>
		)
	}
}
const styles = StyleSheet.create({
	viewSearch: {
		flex: 1,
		padding : 10,
		flexDirection: 'row',
		justifyContent: 'space-between',

		
	},
	viewInput:{
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#d8f0f3',
		justifyContent: 'space-between',		
		height: 45,
		marginRight: 40,
		borderRadius:10,
	},
	inputSearch: {
		fontSize:16,
		borderRadius:10,
		paddingLeft: 10,
	},
	iconSearch:{
		padding:10,
		color: '#80d4ff'
	},
	buttonIconS: {
		paddingTop: 10,
	}
	
	
})

export default TabBar


