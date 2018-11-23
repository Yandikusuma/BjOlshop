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
		this.state = { 
		}
	}

	render(){
		return(
				<View style={styles.headerHome}>
				  <TabBar navigator={this.props.navigator} />
				  <ScrollView>
						<Content navigator={this.props.navigator}/>
					</ScrollView>
						
				</View>
		)
	}
}

const styles = StyleSheet.create({
	headerHome: {	
		flex: 1,
    backgroundColor: '#cccccc',
  },
})

export default HomeScreen