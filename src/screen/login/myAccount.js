import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class MyAccount extends Component{
	static navigatorStyle = { 
		navBarHidden: true,
		tabBarHidden: true
	}

	onPressAddProduct = () => {
		this.props.navigator.push({
			screen: 'AddProduct'
		})
	}
	render(){
		return(
			<View style={styles.container}>
			  <TouchableOpacity>
				  <View style={styles.viewFoto}>
				    <TouchableOpacity>
				  	  <View style={styles.foto}>
				  			<Image 
				  				source={require('../../../image/images.jpg')}
				  				style={{width: 100,height: 100, borderRadius: 100}}
				  			/>
				  		</View>
				  	</TouchableOpacity>
				  </View>
				</TouchableOpacity>
				<ScrollView>
				  <View>
				  	<TextInput 
				  	  placeholder="Nama"
				  	  placeholderTextColor="#000"
				  	  onChangeText={(text) => this.setState({text})}
				  	  style={styles.textInput}
				  	/>
				  </View>
				  <View>
				  	<TextInput 
				  	  placeholder="Nama Toko"
				  	  placeholderTextColor="#000"
				  	  onChangeText={(text) => this.setState({text})}
				  	  style={styles.textInput}
				  	/>
				  </View>
				  <View>
				    <TextInput 
				    	placeholder="Alamat"
				    	placeholderTextColor="#000"
				    	onChangeText={(text) => this.setState({text})}
				    	style={styles.textInput}
				    />
				  </View>
				  <View style={styles.viewButton}>
				  	<TouchableOpacity
				  		style={styles.button}
				  		onPress={this.onPressAddProduct}
				  	>
				  		<Icon name="cart-plus" size={28} color="red" />
				  		<View style={styles.viewIcon}>
				  		    <Text style={styles.text}>You Product</Text>
				  			  <Icon name="angle-right" size={30} color="grey" />
				  		</View>
				  	</TouchableOpacity>
				  </View>
				  <View style={styles.viewSave}>
				  	<TouchableOpacity
				  	  style={styles.buttonSave}
				  	>
				  	  <Text style={{color: 'white'}}>Save</Text>
				  	</TouchableOpacity>
				  </View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	viewFoto: {
		height: 200,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	foto: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		width: 100,
		height: 100,
		backgroundColor: 'red'
	},
	textInput: {
		borderBottomWidth: 1,
		marginHorizontal: 20,
		marginTop: 10
	},
	viewButton: {
		borderBottomWidth: 1,
		borderColor: 'black',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		marginHorizontal: 20	
	},
	button: {
		flexDirection: 'row',
		paddingRight: 10		
	},
	text: {
		paddingLeft: 15,
		paddingTop: 5
	},
	viewIcon: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	viewSave: {
		marginTop: 50,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonSave: {
		backgroundColor: 'black',
		width: 150,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default MyAccount