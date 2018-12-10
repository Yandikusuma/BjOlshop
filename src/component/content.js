import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TextInput, 
	StyleSheet, 
	Image, 
	TouchableOpacity, 
	ImageBackground, 
	ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContenDiscount from './contenDiscount';

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
			<View style={styles.contentView}>
			  <ContenDiscount navigator={this.props.navigator}/>
				<View style={styles.viewCategori}>
				  <Text style={styles.textCategori}>Pick the Categori</Text>
				</View>
				<ScrollView horizontal={true}>
					<View style={styles.viewImage}>
						<TouchableOpacity
						  onPress={this.onDetailPria}
						>
				  	  <View style={styles.contentImage}>
				  	  	<Image 
				  	  		source={require('../../image/baju-Pria.jpg')}
				  	  		style={styles.image}
				  	  	/>
				  	  	<Text>Baju Pria</Text>
						  </View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={this.onDetailPantsPria}
						>
				  	  <View style={styles.contentImage}>
				  	  	<Image 
				  	  		source={require('../../image/celana-pria.jpg')}
				  	  		style={styles.image}							
				  	  	/>
				  	  	<Text>Celana Pria</Text>						
						  </View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={this.onDetailWanita}
						>
				  	  <View style={styles.contentImage}>
				  	  	<Image 
				  	  		source={require('../../image/baju-wanita2.jpg')}
				  	  		style={styles.image}							
				  	  	/>
				  	  	<Text>Baju Wanita</Text>						
						  </View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={this.onDetailPantsWanita}
						>
				  	  <View style={styles.contentImage}>
				  	  	<Image 
				  	  		source={require('../../image/celana-wanita.jpg')}
				  	  		style={styles.image}							
				  	  	/>
				  	  	<Text>Celana Wanita</Text>						
						  </View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={this.onDetailJam}
						>
						  <View style={styles.contentImage}>
				  	  	<Image 
				  	  		source={require('../../image/jam.jpeg')}
				  	  		style={styles.image}							
				  	  	/>
				  	  	<Text>Jam Tangan</Text>						
						  </View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={this.onDetailSepatu}
						>
						  <View style={styles.contentImage}>
				  	  	<Image 
				  	  		source={require('../../image/sepatu2.jpg')}
				  	  		style={styles.image}							
				  	  	/>
				  	  	<Text>Sepatu</Text>						
						  </View>
						</TouchableOpacity>
				  </View>
				</ScrollView>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	contentView:{
		flex: 1,
		backgroundColor: '#cccccc'
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
	viewImage: {
		backgroundColor: "#fff",
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	image: {
		width: 120,
		height: 150
	},
	contentImage: {
		alignItems: 'center',
		paddingVertical: 20,
		marginHorizontal:10
	}
})

export default Content