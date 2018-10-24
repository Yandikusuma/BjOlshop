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
			<View>
				<View style={styles.sliderHome}>
				</View>
					<View style={styles.viewProfile}>
						<TouchableOpacity
						 onPress={this.onPressLogin}
						 style={styles.buttonLogin}
						>
						  <Text style={styles.textLogin}>Login</Text>
						</TouchableOpacity>
					</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sliderHome: {
    height: 200,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    backgroundColor: 'red',
	},
	viewProfile: {
		backgroundColor: '#19334d',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonLogin: {
		backgroundColor: '#19484d',
	},
	textLogin: {
		padding: 20,
	}
})

export default Profile