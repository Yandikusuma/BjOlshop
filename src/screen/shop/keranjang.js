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
			<View style={{flex: 1, backgroundColor: '#bfbfbf'}}>
				<TouchableOpacity
				  onPress={this.onPressDetail}
				>
				  <View style={styles.container}>
						<View style={styles.iconGambar}>
							<Image 
							  style={styles.imageContent}
							  source={require('../../../image/sepatu.jpeg')}
							/>
						</View>
						<View style={styles.textIcon}>
				  	  <View style={styles.text}>
						  	<Text>Merek: Sepatu Nike Versi Terbaru,Elegan,  </Text>
						  	<Text>Harga: </Text>						
						  </View>
						  <View style={styles.delate}>
						    <TouchableOpacity>
						  	   <Icon name="trash" size={30} style={{color: 'white'}}/>
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
		backgroundColor: '#fff',
		height: 80,
		flexDirection: 'row',
		margin: 10,
	},
	iconGambar: {
		backgroundColor: 'red',
		width: 102,
		borderRightWidth: 2,
		borderColor: 'grey'
		
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
		justifyContent: 'space-between',		
		margin: 10,
	},
	delate: {
		backgroundColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80,
		borderRadius: 5
	}
})

export default Keranjang