import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { loginUser } from '../../action/AuthActions';



class Login extends Component{
	static navigatorStyle = {
		tabBarHidden: true,
		navBarHidden: true

		};
  state = {
  	user: '',
  	password: ''
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
	onPressLogin = () => {
		this.props.loginUser(this.state.user, this.state.password);
		if(this.props.auth.success){
			this.props.navigator.push({
				screen: 'Profile'
			})
		}
	}
	renderButtons(){
		if(this.props.auth.loading){
			return <ActivityIndicator />;
		}else{
			return(
				<TouchableOpacity
					onPress={this.onPressLogin.bind(this)}
				>
					<LinearGradient colors={[ '#99ff99', '#0088cc']} style={styles.buttonLogin}>
			      <Text style={styles.textLogin}>Masuk</Text>
					</LinearGradient>
				</TouchableOpacity>
			)
		}
	}
		
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
			    	onChangeText={this.onChangeUser.bind(this)}
			    	style={styles.textInput}
						underlineColorAndroid="transparent"
						value={this.state.user}
			    />
			    <TextInput
			    	placeholder="Kata Sandi"
			    	placeholderTextColor="#bfbfbf"
			    	onChangeText={this.onChangePassword.bind(this)}
			    	style={styles.textInput}
			    	underlineColorAndroid="transparent"
						secureTextEntry
						value={this.state.password}
					/>
					<Text style={{color: 'red'}}>{this.props.auth.errorLogin}</Text>
          {this.renderButtons()}
				</View>
			</LinearGradient>
		)
	}
}

const mapStateToProps = state => ({
  auth: state.auth
});


const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
	},
	textTitle: {
	  marginTop: 80,
	  marginBottom: 10,
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
    borderBottomColor: '#e6e6e1',
	},
	buttonLogin: {
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 3,
	},
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);