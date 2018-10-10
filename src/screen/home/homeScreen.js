import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBar from '../../component/tabBar';
import Content from '../../component/content';
import TabBarFooter from '../../component/tabBarFooter'


class HomeScreen extends Component{
	static navigatorStyle = {navBarHidden: true}
	constructor(props){
		super(props)
		this.state = { text : ''}
	}
	render(){
		return(
				<View style={styles.headerHome}>
				  <ScrollView>
				    <TabBar navigator={this.props.navigator}/>
						<Content navigator={this.props.navigator}/>
					</ScrollView>
						
				</View>
		)
	}
}

const styles = StyleSheet.create({
	headerHome: {	
    backgroundColor: 'rgba(242, 242, 242, 0.8)',
  },
})

export default HomeScreen