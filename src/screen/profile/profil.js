import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import TabBarFooter from '../../component/tabBarFooter';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileLogged from './profileLogged';
import ProfileLoggin from './profileLoggin';



class Profile extends Component{
	static navigatorStyle={navBarHidden: true}
	constructor(props){
		super(props)
		this.state = { 
		}
	}

	render(){
		return(
			<View style={{backgroundColor: "#e6e6e6", flex: 1}}>
				<View style={styles.sliderHome}>
					<Image 
						style={styles.image}
						source={require('../../../image/bjOlshop.jpg')}
					/>
				</View>
				<ProfileLoggin navigator={this.props.navigator}/>
				{/*<ProfileLogged navigator={this.props.navigator} />*/}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sliderHome: {
    height: 200,
    backgroundColor: 'red',
	},
	image: {
		height: 200,
		width: '100%'
	},
})

export default Profile