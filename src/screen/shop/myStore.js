import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


class MyStore extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
})

export default MyStore