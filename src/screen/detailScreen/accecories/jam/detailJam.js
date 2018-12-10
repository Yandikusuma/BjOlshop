import React, { Component } from 'react';
import { View } from 'react-native';
import ContentJam from './contentJam';
import TabBar from '../../../../component/tabBar'

export default class DetailJam extends Component{
	static navigatorStyle = { 
		navBarHidden: true,
		tabBarHidden: true
	}
	render(){
		return(
			<View>
			 <TabBar />
			 <ContentJam navigator={this.props.navigator}/>
			</View>
		)
	}
}