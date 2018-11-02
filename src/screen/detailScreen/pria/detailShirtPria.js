import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabBar from '../../../component/tabBar';
import ContentShirtPria from './contentShirtPria'


class DetailShirtPria extends Component{
	static navigatorStyle = { 
		navBarHidden: false,
		tabBarHidden: true
	}
	render(){
		return(
				<View>
					<ContentShirtPria navigator={this.props.navigator}/>
				</View>
		)
	}
}


export default DetailShirtPria