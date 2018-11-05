import React, { Component } from 'react';
import { View } from 'react-native';
import ContentSepatu from './contentSepatu';
import TabBar from '../../../../component/tabBar'


export default class DetailSepatu extends Component{
	static navigatorStyle = { 
		navBarHidden: true,
		tabBarHidden: true
	}
	render(){
		return(
			<View>
			  <TabBar />
			  <ContentSepatu />
			</View>
		)
	}
}