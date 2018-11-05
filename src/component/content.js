import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

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
	onDetailSepatu = () => {
		this.props.navigator.push({
			screen: 'DetailSepatu'
		})
	}
	onDetailPantsPria = () => {
		this.props.navigator.push({
			screen: 'DetailPantsPria'
		})
	}
	onDetailPantsWanita = () => {
		this.props.navigator.push({
			screen: 'DetailPantsWanita'
		})
	}
	render(){
		return(
			<LinearGradient  colors={[ '#4d0000', '#ff3300']} style={styles.contentView}>
			  <View>
			   <Text style={styles.categori}>Pakaian Pria</Text>
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
			  	  <View style={styles.imagePants}>
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
				<View style={{marginTop: 20}}>
			   <Text style={styles.categori}>Pakaian Wanita</Text>
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
			  	  <View style={styles.imagePants}>
							<TouchableOpacity
							  onPress={this.onDetailPantsWanita}
							>
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
				<View style={{marginTop: 20}}>
			   <Text style={styles.categori}>Accessories</Text>
			    <View style={styles.contentPria}>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity
							  onPress={this.onDetailSepatu}
							>
			  	  	  <Image
			  	  	    style={styles.imageSepatu}
			  	  	    source={require('../../image/shoes1.png')}
			  	  	  />
			  	  	  <View style={styles.textSepatu}>
			  	  	    <Text style={styles.text}>Shoes</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imagePants}>
							<TouchableOpacity
							  onPress={this.onDetailJam}
							>
			  	  	 <Image 
			  	  	   style={styles.imageJam}
			  	  	   source={require('../../image/Watch-icon.png')}/>
			  			  <View style={styles.textCelana}>
			  				 <Text style={styles.text}>Watch</Text>
			  			  </View>
			  			</TouchableOpacity>
			  	  </View>
			    </View>
				</View>
			</LinearGradient>
		)
	}
}


const styles = StyleSheet.create({
	contentView:{
		padding        : 10,
	},
	imageShirt:{
		flex: 1,
		padding     : 20,
		borderColor : '#000f1a',
		borderRadius: 5,
		backgroundColor: 'yellow',
		alignItems: 'center',		
		marginRight: 5,
		marginLeft: 5,
		
	},
	categori: {
		color: 'white',
		fontSize: 20
	},
	imagePants: {
		flex: 1,
		padding     : 20,
		borderColor : '#000f1a',
		backgroundColor: 'yellow',		
		borderRadius: 5,
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
		width    : 180,
		height   : 160,
	},
	imageCelana:{
		padding: 20,
		width  : 180,
		height : 160
	},
	imageSepatu: {
		width: 180,
		height: 160
	},
	imageJam: {
		width: 180,
		height: 150
	},
	text: {
		fontSize: 25,
		color: 'red'
	},
	textBaju:{
		alignItems: 'center',
		marginTop: 10			
	},
	textCelana:{
		alignItems: 'center',
		marginTop: 15
	},
	textSepatu:{
		alignItems: 'center',
	}
})

export default Content