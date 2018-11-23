import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';


class AddProduct extends Component{
	static navigatorStyle = {
		navBarHidden: true,
		tabBarHidden: true
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity>
				  <View style={styles.viewFoto}>
				    <Text style={{color: 'white'}}>Add Foto Your Product</Text>
				  </View>
				</TouchableOpacity>
				<ScrollView>
				  <View>
				  	<TextInput 
				  	  placeholder="Merek"
				  	  placeholderTextColor="#000"
				  	  onChangeText={(text) => this.setState({text})}
				  	  style={styles.textInput}
				  	/>
				  </View>
				  <View>
				  	<TextInput 
				  	  placeholder="Harga"
				  	  placeholderTextColor="#000"
				  	  onChangeText={(text) => this.setState({text})}
				  	  style={styles.textInput}
				  	/>
				  </View>
				  <View>
				  	<TextInput 
				  	  placeholder="Stock"
				  	  placeholderTextColor="#000"
				  	  onChangeText={(text) => this.setState({text})}
				  	  style={styles.textInput}
				  	/>
				  </View>
				  <View>
				    <TextInput
				      placeholder="Deskripsi"
				      placeholderTextColor="#000"
				      onChangeText={(text) => this.setState({text})}
				      style={styles.textInput}
				    />
				  </View>
				  <View>
				    <TextInput
				      placeholder="Quality"
				      placeholderTextColor="#000"
				      onChangeText={(text) => this.setState({text})}
				      style={styles.textInput}
				    />
				  </View>
				  <View style={styles.viewAdd}>
				  	<TouchableOpacity
				  	  style={styles.buttonAdd}
				  	>
				  	 <Text style={{color: 'white'}}>Add</Text>
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
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textInput: {
		borderBottomWidth: 1,
		marginHorizontal: 20,
		marginTop: 10
	},
	viewAdd: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 80,
		marginBottom: 10

	},
	buttonAdd: {
		backgroundColor: '#004d00',
		width: 150,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4
	}
})

export default AddProduct