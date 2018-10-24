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
				    		  source={require('../../../../image/pakaian-pria.jpg')}
				    		/>
				    	 </View>
				    	 <View>
				    		<Text>merk</Text>
				    		<Text>harga</Text>
				    	 </View>
						</TouchableOpacity>
					</View>
					<View style={styles.containerContent}>
					  <TouchableOpacity>
					     <View style={styles.imageView}>
				    		<Image 
				    		  style={styles.imageContent}
				    		  source={require('../../../../image/pakaian-pria.jpg')}
				    		/>
				    	 </View>
				    	 <View>
				    		<Text>merk</Text>
				    		<Text>harga</Text>
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
		margin: 10,
		backgroundColor: 'red',
		padding: 10,
		flexDirection: 'column'
	},
	imageView: {
		alignItems: 'center',
	},
	imageContent: {
		width: 160,
		height: 120
	}
})

export default ContentShirtPria