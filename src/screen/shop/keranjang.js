import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ProductKeranjang from '../../container/ProductKeranjang';
import {data} from '../../data/Data';
import {connect} from 'react-redux';




class Keranjang extends Component{
	static navigatorStyle = {
		navBarHidden: true
	}
	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#bfbfbf'}}>
			{this.props.cartItem.length > 0 ?
				<ProductKeranjang product={data} navigator={this.props.navigator}/>
				:
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				  <Text>No List Item</Text>
				</View>
			}
			</View>
		)
	}
}
const mapStateToProps = (state) => {
	return{
		cartItem: state.cartItem
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
		width: 100,
		height: 80
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

export default connect(mapStateToProps)(Keranjang);