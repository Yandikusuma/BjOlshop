import React, { Component } from 'react';
import { View } from 'react-native';
import DetailContent from '../detailContent'
import TabBar from '../../../component/tabBar'



class DetailPantsPria extends Component{
	static navigatorStyle = { 
		navBarHidden: true,
		tabBarHidden: true
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

export default DetailPantsPria