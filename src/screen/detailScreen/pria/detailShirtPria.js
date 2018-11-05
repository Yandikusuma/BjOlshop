import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabBar from '../../../component/tabBar';
import DetailContent from '../detailContent'


class DetailShirtPria extends Component{
	static navigatorStyle = { 
		navBarHidden: true,
		tabBarHidden: true
	}
	render(){
		return(
				<View>
				  <TabBar />
					<DetailContent navigator={this.props.navigator}/>
				</View>
		)
	}
}


export default DetailShirtPria