import React, { Component } from 'react';
import { View } from 'react-native';
import DetailContent from '../detailContent';
import TabBar from '../../../component/tabBar';


export default class DetailPantsWanita extends Component{
	static navigatorStyle = {
		tabBarHidden: true,
		navBarHidden: true
	}
	render(){
		return(
			<View>
			  <TabBar />
			  <DetailContent />
			</View>
		)
	}
}