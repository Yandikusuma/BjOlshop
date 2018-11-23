import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';



class About extends Component{
	static navigatorStyle = { 
		navBarHidden: true,
		tabBarHidden: true
	}

	render() {
		return(
			<View style={styles.container}>
			  <Text>Apa hak Anda menanyakan itu??</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default About;