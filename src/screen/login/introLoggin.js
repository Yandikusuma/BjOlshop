import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';


class IntroLoggin extends Component{
	static navigatorStyle = {
		tabBarHidden: true,
		navBarHidden: true
		};

		onPressLogin= () => {
			this.props.navigator.push({
				screen: 'Login'
			})
		}
		onPressDaftar = () => {
			this.props.navigator.push({
				screen: 'Register'
			})
		}

	render() {
		return(
			<View style={styles.container}>
				<ImageBackground
					style={styles.imageBack}
					resizeMode='cover'
					source={require('../../../image/shopping1.jpg')}
				>
					<View style={styles.viewTitle}>
						<Text style={styles.textTitle}>BJ</Text>
						<Text style={styles.textTitle1}>Olshop</Text>
					</View>
					<View style={styles.viewText}>
					  <Text style={styles.textShop}>The most fulfiling shopping experience</Text>
					</View>
					<View style={styles.button}>
						<TouchableOpacity
						 onPress={this.onPressLogin}
						>
						  <View style={styles.buttonLogin}>
						    <Text style={styles.textButton}>Login</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={this.onPressDaftar}
						>
						  <View style={styles.buttonRegister}>
							  <Text style={styles.textButton1}>Register</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBack: {
		width: '100%',
		height: '100%'
	},
	viewTitle: {
		marginTop: 50,
		alignItems: 'center',
	},
	textTitle: {
		backgroundColor: 'grey',
		borderWidth: 3,
		borderColor: '#fff',
		fontWeight: 'bold',
		color: '#fff',
		borderRadius: 5,
		fontSize: 35,
		width: 80,
		textAlign: 'center',
	},
	textTitle1: {
		backgroundColor: 'grey',
		borderWidth: 3,
		borderColor: '#fff',
		fontWeight: 'bold',
		color: '#fff',
		borderRadius: 5,
		fontSize: 35,
		width: 150,
		textAlign: 'center',
	},
	viewText: {
		marginTop: 100,
		alignItems: 'center'
	},
	textShop: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',				
		fontSize: 25
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 200,
		paddingHorizontal: 40
	},
	buttonLogin: {
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 5		
	},
	textButton: {
		padding: 10,
		color: "#fff",
		fontSize: 20,
		width: 110,	
		textAlign: 'center'	
	},
	textButton1: {
		padding: 10,
		color: "#fff",
		fontSize: 20,		
	},
	buttonRegister: {
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 5
	},
})

export default IntroLoggin;