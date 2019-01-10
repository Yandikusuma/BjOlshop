import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { createUser } from '../../action/AuthActions';




class Register extends Component{
	static navigatorStyle = { navBarHidden: true, tabBarHidden: true}
	state = {
		user: '',
		password: '',
	}

	onChangeUser = text => {
		this.setState({
			user: text
		})
	}

	onChangePassword = text => {
		this.setState({
			password: text
		})
	}

	onPressSignUp = () => {
		this.props.createUser(this.state.user, this.state.password);
		if(this.props.auth.success === true){
			this.props.navigator.push({
				screen: 'Profile'
			})
		}
	}

	renderButtons(){
		if(this.props.auth.loading){
			return <ActivityIndicator />
		}else{
			return (
				<TouchableOpacity
					style={styles.daftar}
					onPress={this.onPressSignUp.bind(this)}
				>
					<LinearGradient colors={[ '#dfe6e9', '#dfe6e9']} style={styles.buttonDaftar}>
			      <Text style={styles.textDaftar}>Buat Akun</Text>
					</LinearGradient>
				</TouchableOpacity>
			)
		}
	}
	render(){
		return(
			<LinearGradient colors={[ '#4d0000', '#ff3300']} style={styles.container}>
				<View style={styles.titleDaftar}>
				  <Text style={styles.text}>Create Account</Text>
				</View>
				<View style={styles.viewInput}>
				 <TextInput
				    placeholder="Alamat Email"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={this.onChangeUser.bind(this)}
						underlineColorAndroid="transparent"
						style={styles.textInput}
						value={this.state.user}
				 > 
				 </TextInput>
				</View>
				<View style={styles.viewInput}>
				 <TextInput
				    placeholder="Password"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={this.onChangePassword.bind(this)}
						underlineColorAndroid="transparent"
						style={styles.textInput}
						secureTextEntry
						value={this.state.password}
				 >
				 </TextInput>
				</View>
				<Text style={{color: 'white'}}>{this.props.auth.errorCreating}</Text>
        {this.renderButtons()}
			</LinearGradient>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

const styles = StyleSheet.create({
	container: {
    flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleDaftar: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		marginBottom: 40,
		color: 'white',
		fontSize: 30
},
	viewInput: {
		backgroundColor: '#dfe6e9',
		borderColor: '#b3bec3',
		borderWidth: 1,
		borderRadius: 5,
		marginTop: 20,

	},
	textInput:{
		padding: 10,
		width: 280,
		height: 50
	},
	textDaftar: {
		color: 'black'
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

export default connect(mapStateToProps, {createUser})(Register)