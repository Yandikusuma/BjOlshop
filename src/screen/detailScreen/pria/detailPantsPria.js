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
			  <TabBar />
			  <DetailContent />
			</View>
		)
	}
}

export default DetailPantsPria