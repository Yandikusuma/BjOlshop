import React, { Component, version } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class DetailScreen extends Component{
	static navigatorStyle = { tabBarHidden: true }
	render(){
		return(
			<ScrollView>
			  <View style={StyleSheet.container}>
			  	<View style={styles.viewImage}>
			  		<Image 
			  			style={styles.image}
			  			source={require('../../../image/pakaian-pria.jpg')}
			  		/>
			  	</View>
			  	<View style={{backgroundColor: 'white'}}>
			  		<View style={styles.viewText}>
			  			<Text style={styles.textM}>Merek</Text>
			  		  <Text style={styles.textMerek}>: Kemeja</Text>						
			  		</View>
			  		<View style={styles.viewText}>
			  			<Text style={styles.textM}>Harga</Text>
			  		  <Text style={styles.textM1}>: 250.00</Text>						
			  		</View>
			  		<View style={styles.viewText}>
			  			<Text style={styles.textM}>Stock</Text>
			  			<Text style={styles.textM1}> : Terakhir</Text>						
			  		</View>
			  		<View style={styles.viewText}>
			  			<Text style={styles.textM}>Penjual</Text>
			  		  <Text style={styles.textPenjual}>: BjOlshop</Text>
			  		</View>
			  		<View style={styles.viewText}>
			  			<Text style={styles.textM}>Lokasi</Text>
			  			<Text style={styles.textLokasi}>: Sungai Bahar 11, kabupaten Muaro Jambi</Text>
			  		</View>
			  	  <View style={styles.viewButton}>
			  	  	<TouchableOpacity>
			  			  <LinearGradient colors={[ 'blue', '#0088cc']} style={styles.button}>
			  				   <Text style={styles.textButton}>Pesan</Text>
			  				</LinearGradient>
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
		backgroundColor: 'white'
	},
	viewImage: {
		alignItems: 'center',
		backgroundColor: 'white'
	},
	image: {
		height: 300,
		width: 250
	},
	viewText: {
		marginTop: 5,
		flexDirection: 'row'
	},
	textM: {
		fontSize: 20,
		color: 'red',
		fontFamily: 'Avenir-Medium'
	},
	textMerek: {
		fontSize: 20,
		color: 'blue',
		marginLeft: 11,
		paddingTop: 5
	},
	textM1: {
		fontSize: 20,
		color: 'blue',
		marginLeft: 15,
		paddingTop: 5
	},
	textLokasi: {
		fontSize: 20,
		color: 'blue',
		marginRight: 80,
		marginLeft: 15,
		paddingTop: 5		
		
	},
	textPenjual: {
		fontSize: 20,
		color: 'blue',
		marginLeft: 5,
		paddingTop: 5
		
	},
	viewButton: {
		marginTop: 30,
		marginBottom: 20,
		alignItems: 'center',
	},
	button: {
		width: 250,
    height: 50,
    alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10	
	},
	textButton: {
		color: 'white',
		fontSize: 18
	}

})