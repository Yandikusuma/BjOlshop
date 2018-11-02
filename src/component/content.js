import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


class Content extends Component{
	constructor(){
		super();
		this.state = {
		}
	}
	
	onDetailPria = () => {
		this.props.navigator.push({
			screen: 'DetailShirtPria',
		})
	}
	onDetailWanita = () => {
		this.props.navigator.push({
			screen: 'DetailShirtWanita',
		})
	}
	onDetailJam = () => {
		this.props.navigator.push({
			screen: 'DetailJam'
		})
	}
	onDetailPantsPria = () => {
		this.props.navigator.push({
			screen: 'DetailPantsPria'
		})
	}
	render(){
		return(
			<View>
			  <View style={styles.contentView}>
			   <Text>Pakaian Pria</Text>
			    <View style={styles.contentPria}>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity onPress={this.onDetailPria}>
			  	  	  <Image
			  	  	    style={styles.imageBaju}
			  	  	    source={require('../../image/mens-shirt.png')}
			  	  	  />
			  	  	  <View style={styles.textBaju}>
			  	  	    <Text style={styles.text}>Clothes</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity
							  onPress={this.onDetailPantsPria}
							>
			  	  	  <Image 
			  	  	   style={styles.imageCelana}
								 source={require('../../image/jeans_pria.png')}
							  />
			  			  <View style={styles.textCelana}>
			  				 <Text style={styles.text}>Pants</Text>
			  			  </View>
			  			</TouchableOpacity>
			  	  </View>
			    </View>
				</View>
				<View style={styles.contentView}>
			   <Text>Pakaian Wanita</Text>
			    <View style={styles.contentPria}>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity
							  onPress={this.onDetailWanita}
							>
			  	  	  <Image
			  	  	    style={styles.imageBaju}
			  	  	    source={require('../../image/womans-collared-tshirt.png')}
			  	  	  />
			  	  	  <View style={styles.textBaju}>
			  	  	    <Text style={styles.text}>Clothes</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imageShirt}>
			  	  	<TouchableOpacity>
			  	  	 <Image 
			  	  	   style={styles.imageCelana}
			  	  	   source={require('../../image/womans-jeans.png')}/>
			  			  <View style={styles.textCelana}>
			  				 <Text style={styles.text}>Pants</Text>
			  			  </View>
			  			</TouchableOpacity>
			  	  </View>
			    </View>
				</View>
				<View style={styles.contentView}>
			   <Text>Accessories</Text>
			    <View style={styles.contentPria}>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity
							  onPress={this.onDetailWanita}
							>
			  	  	  <Image
			  	  	    style={styles.imageSepatu}
			  	  	    source={require('../../image/shoes.png')}
			  	  	  />
			  	  	  <View style={styles.textBaju}>
			  	  	    <Text style={styles.text}>Sepatu</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity
							  onPress={this.onDetailJam}
							>
			  	  	 <Image 
			  	  	   style={styles.imageJam}
			  	  	   source={require('../../image/Watch-icon.png')}/>
			  			  <View style={styles.textCelana}>
			  				 <Text style={styles.text}>Jam Tangan</Text>
			  			  </View>
			  			</TouchableOpacity>
			  	  </View>
			    </View>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	contentView:{
		backgroundColor: 'white',
		padding        : 10,
		alignItems     : 'center',		
		backgroundColor: '#e6e6e6'
	},
	imageShirt:{
		flex: 1,
		padding     : 20,
		borderColor : '#000f1a',
		borderWidth : 1,
		borderRadius: 5,
		marginTop   : 10,
		alignItems: 'center',
		marginRight: 5,
		marginLeft: 5,
		
	},
	contentPria:{
		flexDirection : 'row',
		justifyContent: 'space-between',
	},
	imageBaju:{
		marginTop: 5,
		width    : 160,
		height   : 120,
	},
	imageCelana:{
		padding: 20,
		width  : 160,
		height : 130
	},
	imageSepatu: {
		width: 180,
		height: 160
	},
	imageJam: {
		width: 160,
		height: 160
	},
	text: {
		fontSize: 25,
	},
	textBaju:{
		alignItems: 'center',
		paddingTop: 20
	},
	textCelana:{
		alignItems: 'center',
		paddingTop: 20
	}
})

export default Content