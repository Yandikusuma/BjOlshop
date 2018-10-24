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
							<TouchableOpacity
							  onPress={this.onDetailWanita}
							>
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
							<TouchableOpacity
							  onPress={this.onDetailWanita}
							>
			  	  	  <Image
			  	  	    style={styles.imageBaju}
			  	  	    source={require('../../image/icon_baju.png')}
			  	  	  />
			  	  	  <View style={styles.textBaju}>
			  	  	    <Text>Sepatu & Sandal</Text>
			  	  	  </View>
			  	  	</TouchableOpacity>
			  	  </View>
			  	  <View style={styles.imageShirt}>
			  	  	<TouchableOpacity>
			  	  	 <Image 
			  	  	   style={styles.imageCelana}
			  	  	   source={require('../../image/icon-celana.png')}/>
			  			  <View style={styles.textCelana}>
			  				 <Text>Jam Tangan & Accsories</Text>
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
		backgroundColor: '#e6e6e6'
	},
	imageShirt:{
		flex: 1,
		padding     : 20,
		borderColor : '#000f1a',
		borderWidth : 1.5,
		borderRadius: 5,
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