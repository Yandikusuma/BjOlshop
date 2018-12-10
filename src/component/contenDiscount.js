import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

class ContenDiscount extends Component{
	onPressPesan = () => {
		this.props.navigator.push({
			screen: 'ContenDiscountMore',
		})
	}
	onPressDetail = () => {
		this.props.navigator.push({
			screen: 'DetailScreen',
			title: 'Detail Product'
		});

	}
	render(){
		return(
			<ScrollView>
			  <View style={styles.container}>
			    <View style={styles.viewCategori}>
						<Text style={styles.textCategori}>Recommended By Discount</Text>
						<TouchableOpacity onPress={this.onPressPesan}>
						  <Text style={{paddingRight: 10}}>More</Text>
						</TouchableOpacity>
			  	</View>
			  	<View style={styles.viewDiscountImage}>
						<View style={styles.viewDiscount}>
						  <View style={styles.viewImage}>
								<TouchableOpacity
								  onPress={this.onPressDetail}
								>
			  		    	<Image 
			  		    	  style={styles.image}
			  		    	  source={require('../../image/sepatu.jpeg')}
			  			  	/>
			  			  	<View>
			  			  		<Text style={styles.text}>Sepatu Allstar Orii</Text>
			  			  		<Text>Harga</Text>
			  			  		<Text>Harga - Discount</Text>
			  			  	</View>
								</TouchableOpacity>
							</View>
							<View style={styles.viewImage}>
								<TouchableOpacity
								  onPress={this.onPressDetail}
								>
			  		  	  <Image 
			  		  	    style={styles.image}						
			  		  	    source={require('../../image/baju-Pria.jpg')}
			  				  />
			  				  <View>
			  				  	<Text style={styles.text}>Baju Allstar Orii</Text>
			  				  	<Text>Harga</Text>
			  				  	<Text>Harga - Discount</Text>
								  </View>
								</TouchableOpacity>
			  			</View>
			  		</View>
						<TouchableOpacity
						  onPress={this.onPressDetail}
						>
						  <View style={styles.discountSide}>
			  			  <Image 
			  			    style={styles.imageSide}												
			  			    source={require('../../image/baju_pria.png')}
							  />
							  <View style={styles.viewText}>
			  			  		<Text style={styles.text}>Baju Allstar Orii</Text>
			  			  		<Text>Harga</Text>
			  			  		<Text>Harga - Discount</Text>
							  </View>
							</View>
						</TouchableOpacity>
			    </View>
			  </View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	viewDiscountImage: {
		backgroundColor: '#fff',
		paddingHorizontal: 20
	},
	viewDiscount: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	viewImage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	viewCategori: {
		flexDirection: 'row',
		marginTop: 20,
		paddingLeft: 30,
		justifyContent: 'space-between'
	},
	textCategori: {
		fontSize: 16,
		color: '#000',
		fontWeight: 'bold'
	},
	image: {
		width: 120,
		height: 100,
	},
	imageSide: {
		flex: 1,	
		height: 180,
	},
	viewText: {
		flex: 1,
		marginLeft: 40
	},
	text: {
		fontSize: 18,
	},
	discountSide: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		alignItems: 'center'
	}
})

export default ContenDiscount