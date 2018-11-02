import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import ModalDetail from '../../../component/modal'


class ContentShirtPria extends Component{
	state = {
		isVisible: false
	}
	onToggle = () => {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}
	render(){
		return(
			<View>
				<View style={styles.container}>
				  <View style={styles.containerContent}>
						<TouchableOpacity 
						  onPress={this.onToggle}
						>
				    	 <View style={styles.imageView}>
				    		<Image 
				    		  style={styles.imageContent}
				    		  source={require('../../../../image/baju_pria1.jpg')}
				    		/>
				    	 </View>
				    	 <View>
				    		<Text>Merek:</Text>
				    		<Text>Harga:</Text>
				    	 </View>
						</TouchableOpacity>
					</View>
					<View style={styles.containerContent1}>
					  <TouchableOpacity>
					     <View style={styles.imageView}>
				    		<Image 
				    		  style={styles.imageContent}
				    		  source={require('../../../../image/baju_pria.png')}
				    		/>
				    	 </View>
				    	 <View>
				    		<Text>Merek:</Text>
				    		<Text>Harga:</Text>
				    	 </View>
						</TouchableOpacity>
					</View>
				</View>
				<ModalDetail 
					transparent={true}
					navigator={this.props.navigator}
				  isVisible={this.state.isVisible}
				  onToggle={this.onToggle}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	containerContent: {
		flex: 1,
		backgroundColor: 'red',
		margin: 3,
		flexDirection: 'column'
	},
	containerContent1: {
		flex: 1,
		margin: 3,
		backgroundColor: 'red',
		flexDirection: 'column'
	},
	imageView: {
		alignItems: 'center',
	},
	imageContent: {
		width: "100%",
		height: 200
	}
})

export default ContentShirtPria