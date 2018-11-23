import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class ForgotPassword extends Component{
	static navigatorStyle = {
		tabBarHidden: true,
		navBarHidden: true
	}
	render(){
		return(
			<LinearGradient colors={[ '#4d0000', '#ff3300']} style={styles.container}>
			  <View style={styles.textTitle}>
			    <Text style={styles.textTitle}>Forgot Your Password</Text>
			  </View>
				<View style={styles.viewInput}>
					<TextInput 
						placeholder="Alamat Email"
						placeholderTextColor="black"
						onChangeText={(text) => this.setState({text})}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
					/>
				</View>
				<View style={styles.viewInput}>
					<TextInput 
						placeholder="Old Password"
						placeholderTextColor="black"
						onChangeText={(text) => this.setState({text})}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
					/>
				</View>
				<View style={styles.viewInput}>
					<TextInput 
						placeholder="New Password"
						placeholderTextColor="black"
						onChangeText={(text) => this.setState({text})}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
					/>
				</View>
				<View style={styles.viewInput}>
					<TextInput 
						placeholder="Confirm Password"
						placeholderTextColor="black"
						onChangeText={(text) => this.setState({text})}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
					/>
				</View>
				<TouchableOpacity
						style={styles.forgot}
					>
					  <LinearGradient colors={[ '#fff', '#fff9']} style={styles.buttonForgot}>
			      	    <Text style={styles.textForgot}>Confirm</Text>
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
	textTitle: {
		marginTop: 30,
		marginBottom: 20,
		color: 'white',
		fontSize: 20
},
	viewInput: {
		backgroundColor: '#ffff',
		borderRadius: 10,
		marginTop: 20,

	},
	textInput:{
		padding: 10,
		width: 280,
		height: 50
	},
	forgot: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonForgot: {
		width: 150,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		borderRadius: 3,
	},
	textForgot: {
		color: 'black'
	},
})