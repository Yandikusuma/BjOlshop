import React, { Component } from 'react';
import { View } from 'react-native';
import DetailContent from '../detailContent';
import TabBar from '../../../component/tabBar'


export default class DetailShirtWanita extends Component{
	static navigatorStyle = {
		tabBarHidden: true,
		navBarHidden: true
	}
	render(){
		return(
			<View>
			  <TabBar navigator={this.props.navigator}/>
			  <DetailContent navigator={this.props.navigator}/>
			</View>
		)
	}
}