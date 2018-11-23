import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class ProfileLoggin extends Component{
	onPressLogin= () => {
		this.props.navigator.push({
			screen: 'IntroLoggin'
		})
	}
	onPressAbout = () => {
		this.props.navigator.push({
			screen: 'About'
		})
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.viewProfile}>
					<TouchableOpacity
						style={styles.buttonLogin}
						onPress={this.onPressLogin}
					>
						<Icon name="user" size={30} color="red" />
						<Text style={styles.text}>Login</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewBantuan}>
				 <TouchableOpacity
				   style={styles.buttonBantuan}
				 >
					 <Icon name="question" size={35} color="red"/>
					 <Text style={styles.text}>Bantuan</Text>
				 </TouchableOpacity>
				</View>
				<View style={styles.viewTentang}>
					<TouchableOpacity
					 style={styles.buttonTentang}
					 onPress={this.onPressAbout}
					>
					 <Icon name="exclamation" size={35} color="red"/>
					 <Text style={styles.textTentang}>Tentang</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#fff',
		paddingTop: 10
	},
	viewProfile: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 20,
		paddingBottom: 20
	},
	buttonLogin: {
		flexDirection: 'row',
		paddingLeft: 10
		
	},
	text: {
		paddingLeft: 15,
		fontSize: 20
	},
	textTentang: {
		paddingLeft: 18,
		fontSize: 20
	},
	viewBantuan: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 20,
		paddingBottom: 20
	},
	buttonBantuan: {
		flexDirection: 'row',
		paddingLeft: 10
	},
	viewTentang: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 20,
		paddingBottom: 20
	},
	buttonTentang: {
		flexDirection: 'row',
		paddingLeft: 13
	},
})


export default ProfileLoggin;