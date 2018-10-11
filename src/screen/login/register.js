import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




class Register extends Component{
	static navigatorStyle = { navBarHidden: false, tabBarHidden: true}
	render(){
		return(
			<LinearGradient colors={[ '#4d0000', '#ff3300']} style={styles.container}>
				<View style={styles.titleDaftar}>
				  <Text style={styles.text}>Create Account</Text>
				</View>
				<View style={styles.viewInput}>
				 <TextInput
				    placeholder="Name"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={(text) => this.setState({text})}
						underlineColorAndroid="transparent"
						style={styles.textInput}
				 > 
				 </TextInput>
				</View>
				<View style={styles.viewInput}>
				 <TextInput
				    placeholder="Alamat Email"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={(text) => this.setState({text})}
						underlineColorAndroid="transparent"
						style={styles.textInput}
				 >
				 </TextInput>
				</View>
				<View style={styles.viewInput}>
				 <TextInput
				    placeholder="Password"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={(text) => this.setState({text})}
						underlineColorAndroid="transparent"
						style={styles.textInput}
				 >
				 </TextInput>
				</View>
				<View style={styles.viewInput}>
				 <TextInput
				    placeholder="Confirm Password"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={(text) => this.setState({text})}
						underlineColorAndroid="transparent"
						style={styles.textInput}
				 >
				 </TextInput>
				</View>
				 <TouchableOpacity
						style={styles.daftar}
				 >
					  <LinearGradient colors={[ '#0d1a26', '#0d1a26']} style={styles.buttonDaftar}>
			      	    <Text style={styles.textDaftar}>Buat Akun</Text>
					  </LinearGradient>
				 </TouchableOpacity>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
	},
	titleDaftar: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		marginBottom: 40,
		color: 'white',
		fontSize: 30
},
	viewInput: {
		backgroundColor: 'grey',
		borderRadius: 10,
		marginTop: 20,

	},
	textInput:{
		padding: 10,
		width: 280,
		height: 50
	},
	textDaftar: {
		color: 'white'
	},
	buttonDaftar: {
		width: 150,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		borderRadius: 3,
},
})

export default Register