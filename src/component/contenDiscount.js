import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

class ContenDiscount extends Component{
	render(){
		return(
			<ScrollView>
			  <View style={styles.container}>
			    <View style={styles.viewCategori}>
			  	  <Text style={styles.textCategori}>Recommended By Discount</Text>
			  	</View>
			  	<View style={styles.viewDiscountImage}>
						<View style={styles.viewDiscount}>
						  <View style={styles.viewImage}>
						    <TouchableOpacity>
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
							  <TouchableOpacity>
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
						<TouchableOpacity>
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
		marginTop: 20,
		paddingLeft: 30,
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