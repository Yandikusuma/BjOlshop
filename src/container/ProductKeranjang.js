import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import TabBarFooter from '../component/tabBarFooter';
import Icon from 'react-native-vector-icons/FontAwesome';
import {data} from '../data/Data';
import {connect} from 'react-redux';




class ProductKeranjang extends Component{
	static navigatorStyle = {
		navBarHidden: true
	}

	onPressPesan = () => {
		this.props.navigator.push({
			screen: 'Pesan',
			title: 'Confirm Order'
		})
	}

	renderProduct = (product) => {
		return product.map((item, index) =>{
			console.log('aaaa',item)
			return(
				<View key={index}>
				  <TouchableOpacity
				    onPress={this.onPressPesan}
				  >
				    <View style={styles.container}>
				  		<View style={styles.iconGambar}>
				  			<Image 
				  			  style={styles.imageContent}
				  			  source={item.image}
				  			/>
				  		</View>
				  		<View style={styles.textIcon}>
				    	  <View style={styles.text}>
				  		  	<Text>Merek: {item.merek}</Text>
				  		  	<Text>Harga: IDR{item.harga}</Text>						
				  		  </View>
				  		  <View style={styles.delate}>
									<TouchableOpacity
									  onPress={this.props.removeItem}
									>
				  		  	   <Icon name="trash" size={30} style={{color: 'white'}}/>
				  		    </TouchableOpacity>
				  		  </View>
				  		</View>
				  	</View>
				  </TouchableOpacity>
			</View>
			)
		})
	}

	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#bfbfbf'}}>
			  <ScrollView>
				  {this.renderProduct(this.props.product)}
				</ScrollView>
			</View>
		)
	}
}

const mapDispacthToProps = (dispacth) => {
	return{
		removeItem: (product) => dispacth({type: 'REMOVE_FROM_CART', payload: product})
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
		width: 101,
		borderRightWidth: 1,
		borderColor: 'grey'
		
	},
	textIcon: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	imageContent: {
		width: '100%',
		height: '100%'
	},
	text: {
		flexDirection: 'column',
		justifyContent: 'space-between',		
		margin: 10,
		width: 150
	},
	delate: {
		backgroundColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
	}
})

export default connect(null, mapDispacthToProps)(ProductKeranjang)