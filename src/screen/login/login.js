import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Login extends Component{
	render(){
		return(
			<LinearGradient colors={[ '#001a33', '#0088cc']} style={styles.container}>
				<View style={styles.textTitle}>
				 <Text style={styles.textTitle}>SIGN IN</Text>
				</View>
				<View>
			    <TextInput
			    	placeholder="Alamat Email"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={(text) => this.setState({text})}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
			    />
			    <TextInput
			    	placeholder="Kata Sandi"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={(text) => this.setState({text})}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
			    	secureTextEntry
					/>
					<TouchableOpacity>
					  <LinearGradient colors={[ '#99ff99', '#0088cc']} style={styles.buttonLogin}>
			      	<Text style={styles.textLogin}>Masuk</Text>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity style={styles.forgotPassword}>
					  <Text style={styles.textForgotPassword}>Forgot Password?</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.daftar}>
					  <LinearGradient colors={[ '#000099', '#0088cc']} style={styles.buttonDaftar}>
			      	<Text style={styles.textLogin}>Buat Akun</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
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
		fontSize: 30
	},
	textInput: {
    width: 250,
    height: 70,
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
	},
	buttonLogin: {
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 3,
	},
	daftar: {
		alignItems: 'center',
    justifyContent: 'center',
	},
	buttonDaftar: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 3,
	},
	forgotPassword: {
		marginTop: 15,
		alignItems: 'center',
    justifyContent: 'center',
	},
	textForgotPassword: {
		color: '#a6a6a6'
	}
})

export default Login