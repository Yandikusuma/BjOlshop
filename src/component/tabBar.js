import React, { Component }from 'react';
import { View,StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'



class TabBar extends Component{
	constructor(props){
		super(props),
		this.state={
		}
	}
	onPressMarket = () =>{
		this.props.navigator.push({
			screen: 'Keranjang'
		})
	}
	render(){
		return(
			<LinearGradient colors={[ '#0059b3', '#0059b3']} style={styles.viewSearch}>
			  <View style={styles.viewInput}>
				  <TextInput
				    placeholder="Go Shopping ..."
				    placeholderTextColor="#b3b3b3"
				    onChangeText={(text) => this.setState({text})}
				    style={styles.textInput}
					/>
					<TouchableOpacity 
			    >
			    	<Icon name="search" size={25} style={{color:'#a6a6a6', paddingRight: 10}}/>
				  </TouchableOpacity>
			  </View>
				<View style={styles.buttonIconS}>
				  <TouchableOpacity 
				       onPress={this.onPressMarket}
					>
					  <View style={styles.textMarket}>
					    <Text style={{color: '#fff'}}>0</Text>
					  </View>
			    	<Icon name="shopping-basket" size={30} style={{color:'#fff'}}/>
				  </TouchableOpacity>
				</View>
		  </LinearGradient>
		)
	}
}
const styles = StyleSheet.create({
	viewSearch: {
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	viewInput:{
		flex: 1,
		flexDirection: 'row',		
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		marginHorizontal: 25,
		borderRadius: 2,
		paddingLeft: 20,
		alignItems: 'center'
	},
	textTitle: {
		color: 'aqua',
		fontSize: 20
	},
	buttonIconS: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10
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

export default TabBar


