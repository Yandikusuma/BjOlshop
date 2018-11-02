import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TabBarFooter from '../../component/tabBarFooter';
import Icon from 'react-native-vector-icons/FontAwesome';



class Keranjang extends Component{
	static navigatorStyle = {
		navBarHidden: true
	}
	constructor(props){
		super(props)
		this.state = { 
		}
	}
	onPressDetail = () => {
		this.props.navigator.push({
			screen: 'DetailScreen',
		});

	}

	render(){
		return(
			<View style={{flex: 1}}>
				<TouchableOpacity
				  onPress={this.onPressDetail}
				>
				  <View style={styles.container}>
						<View style={styles.iconGambar}>
							<Image 
							  style={styles.imageContent}
							  source={require('../../../image/pakaian-pria.jpg')}
							/>
						</View>
						<View style={styles.textIcon}>
				  	  <View style={styles.text}>
						  	<Text>Merek: </Text>
						  	<Text>Harga: </Text>
				  	    <Text> </Text>							
						  </View>
						  <View style={styles.delate}>
						    <TouchableOpacity>
						  	   <Icon name="trash" size={30} style={{color:'#63d7cc'}}/>
						    </TouchableOpacity>
						  </View>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'grey',
		height: 80,
		flexDirection: 'row',
		marginTop: 10,
	},
	iconGambar: {
		backgroundColor: 'red',
		width: 100
		
	},
	textIcon: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	imageContent: {
		width: 100,
		height: 80
	},
	text: {
		flexDirection: 'column',
		marginLeft: 10
	},
	delate: {
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80
	}
})

export default Keranjang