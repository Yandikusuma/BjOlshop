import React, { Component } from 'react';
import { View } from 'react-native';
import ContentShirtWanita from './contentShirtWanita'


export default class DetailShirtWanita extends Component{
	static navigatorStyle = {tabBarHidden: true}
	render(){
		return(
			<View>
			  <ContentShirtWanita navigator={this.props.navigator}/>
			</View>
		)
	}
}