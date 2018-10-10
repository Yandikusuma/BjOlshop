import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabBar from '../../component/tabBar';
import ContentShirt from '../../screen/detailScreen/contentShirt'


class DetailShirt extends Component{
	static navigatorStyle = { navBarHidden: false}
	render(){
		return(
			<View>
				<View>
					<ContentShirt />
				</View>
			</View>
		)
	}
}


export default DetailShirt