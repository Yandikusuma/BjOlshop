import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TabBarFooter from '../../component/tabBarFooter';
import Icon from 'react-native-vector-icons/FontAwesome';



class Profile extends Component{
	static navigatorStyle={navBarHidden: true}
	constructor(props){
		super(props)
		this.state = { 
		}
	}


	onPressLogin= () => {
		this.props.navigator.push({
			screen: 'Login'
		})
	}
	render(){
		return(
			<View style={{backgroundColor: "#e6e6e6", flex: 1}}>
				<View style={styles.sliderHome}>
				</View>
				<View style={styles.container}>
					<View style={styles.viewProfile}>
						<TouchableOpacity
						 onPress={this.onPressLogin}
						 style={styles.buttonLogin}
						> 
						  <Icon name="user" size={32} color="red"/>
						  <Text style={styles.text}>Akun Saya</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.viewBantuan}>
					 <TouchableOpacity style={styles.buttonBantuan}>
					   <Icon name="question" size={35} color="red"/>
					   <Text style={styles.text}>Bantuan</Text>
					 </TouchableOpacity>
					</View>
					<View style={styles.viewTentang}>
						<TouchableOpacity style={styles.buttonTentang}>
						  <Icon name="exclamation" size={35} color="red" />
						  <Text style={styles.text}>Tentang</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sliderHome: {
    height: 200,
    backgroundColor: 'red',
	},
	container: {
		marginTop: 20,
		backgroundColor: '#fff',
		paddingTop: 10,
		paddingBottom: 160
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
	viewBantuan: {
		borderBottomWidth: 2,
		borderColor: 'grey',
		paddingTop: 20,
		paddingBottom: 20
	},
	buttonBantuan: {
		flexDirection: 'row',
		paddingLeft: 10
	},
	viewTentang: {
		borderBottomWidth: 2,
		borderColor: 'grey',
		paddingTop: 20,
		paddingBottom: 20
	},
	buttonTentang: {
		flexDirection: 'row',
		paddingLeft: 13
	},
})

export default Profile