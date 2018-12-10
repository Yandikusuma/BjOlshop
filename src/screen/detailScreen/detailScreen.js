import React, { Component, version } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class DetailScreen extends Component{
	static navigatorStyle = { 
		tabBarHidden: true,
	}

	onPressPesan = () => {
		this.props.navigator.push({
			screen: 'Pesan',
			title: 'Confirm Order'
		})
	}
	render(){
		return(
			<ScrollView>
			  <View style={styles.container}>
			  	<View style={styles.viewImage}>
			  		<Image 
			  			style={styles.image}
			  			source={require('../../../image/jam.jpeg')}
			  		/>
					</View>
					<ScrollView>
					  <View style={styles.textDescription}>
					     <View style={styles.viewText}>
					       <Text style={styles.text}>Nama Toko</Text>
					  	 </View>
					     <View style={styles.viewText}>
					       <Text>Merek</Text>
					  	 </View>
					  	 <View style={styles.viewText}>
					  	   <Text>Stock</Text>
							 </View>
							 <View style={styles.viewText}>
					  	   <Text>Discount</Text>
					  	 </View>
					  	 <View style={styles.viewText}>
					  	   <Text>Alamat Toko</Text>
					  	 </View>
					  	 <View style={styles.viewText}>
					  	   <Text>Quality</Text>
							 </View>
							 <View style={styles.viewText}>
					  	   <Text>Description</Text>
					  	 </View>
					  </View>
					</ScrollView>
					<View style={styles.viewButton}>
					  <View style={styles.boxButton}>
					  	  <Text style={styles.textHarga}>Harga</Text>
					  </View>
					  <View>
							<TouchableOpacity 
								style={styles.boxButtonPesan}
								onPress={this.onPressPesan}
							>
					  	  <Text style={styles.textPesan}>Add to Cart</Text>
					  	</TouchableOpacity>
					  </View>
				  </View>
				</View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cccccc'
	},
	viewImage: {
		alignItems: 'center',
		backgroundColor: 'white',
		marginHorizontal: 10,		
		marginVertical: 20
	},
	image: {
		height: 300,
		width: 250
	},
	textDescription: {
		backgroundColor: 'white',
		marginVertical: 10,
		paddingBottom: 20
	},
	viewText: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: '#cccccc',
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 18,
	},
	viewButton: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		paddingVertical: 20
	},
	boxButton: {
		backgroundColor: '#b3b3b3'
	},
	textHarga: {
		paddingHorizontal: 50,
		paddingVertical: 20,
		color: 'red'
	},
	boxButtonPesan: {
		backgroundColor: 'red'
	},
	textPesan: {
		paddingHorizontal: 50,
		paddingVertical: 20,
		color: '#fff'
	}

})