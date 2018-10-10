import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


class Content extends Component{
	constructor(){
		super();
		this.state = {
		}
	}
	
	onPress = () => {
		this.props.navigator.push({
			screen: 'DetailShirt',
		})
	}
	render(){
		return(
			<View>
			  <View style={styles.contentView}>
			   <Text>Pakaian Pria</Text>
			    <View style={styles.contentPria}>
			  	  <View style={styles.imageShirt}>
							<TouchableOpacity onPress={this.onPress}>
			  	  	  <Image
			  	  	    style={styles.imageBaju}
			  	  	    source={require('../../image/icon_baju.png')}
			  	  	  />
			  	  	  <View style={styles.textBaju}>
			  	  	    <Text>Baju</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imageShirt}>
			  	  	<TouchableOpacity>
			  	  	 <Image 
			  	  	   style={styles.imageCelana}
			  	  	   source={require('../../image/icon-celana.png')}/>
			  			  <View style={styles.textCelana}>
			  				 <Text>Celana</Text>
			  			  </View>
			  			</TouchableOpacity>
			  	  </View>
			    </View>
				</View>
				<View style={styles.contentView}>
			   <Text>Pakaian Wanita</Text>
			    <View style={styles.contentPria}>
			  	  <View style={styles.imageShirt}>
			  	    <TouchableOpacity>
			  	  	  <Image
			  	  	    style={styles.imageBaju}
			  	  	    source={require('../../image/icon_baju.png')}
			  	  	  />
			  	  	  <View style={styles.textBaju}>
			  	  	    <Text>Baju</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imageShirt}>
			  	  	<TouchableOpacity>
			  	  	 <Image 
			  	  	   style={styles.imageCelana}
			  	  	   source={require('../../image/icon-celana.png')}/>
			  			  <View style={styles.textCelana}>
			  				 <Text>Celana</Text>
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
		padding        : 10
	},
	imageShirt:{
		flex: 1,
		padding     : 20,
		borderColor : '#ddd',
		borderWidth : 1.5,
		borderRadius: 10,
		marginTop   : 10,
		alignItems: 'center',
		marginRight: 5,
		marginLeft: 5,
		
	},
	contentPria:{
		flexDirection : 'row',
		justifyContent: 'space-between'
	},
	imageBaju:{
		marginTop: 10,
		width    : 120,
		height   : 100
	},
	imageCelana:{
		padding: 20,
		width  : 120,
		height : 130
	},
	textBaju:{
		paddingLeft: 40,
		paddingTop : 20
	},
	textCelana:{
		paddingLeft: 35,
		paddingTop : 4
	}
})

export default Content