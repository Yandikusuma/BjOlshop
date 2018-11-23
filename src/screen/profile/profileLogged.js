import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class ProfileLogged extends Component{
	onPressAccount = () => {
		this.props.navigator.push({
			screen: 'MyAccount'
		})
	}

	onPressMarket = () =>{
		this.props.navigator.push({
			screen: 'Keranjang'
		})
	}

	onPressForgot = () => {
		this.props.navigator.push({
			screen: 'ForgotPassword'
		})
	}
	onPressAddProduct = () => {
		this.props.navigator.push({
			screen: 'AddProduct'
		})
	}
	onPressAbout = () => {
		this.props.navigator.push({
			screen: 'About'
		})
	}
	render(){
		return(
			<ScrollView>
			  <View style={styles.container}>
			  	<View style={styles.viewProfile}>
			  		<TouchableOpacity
			  		 style={styles.buttonMyAccount}
			  		 onPress={this.onPressAccount}
			  		>
			  			<Icon name="user" size={28} color="red" />
			  			<View style={styles.viewIcon}>
			  			    <Text style={styles.text}>Akun Saya</Text>
			  				  <Icon name="angle-right" size={30} color="grey" />
			  			</View>
			  		</TouchableOpacity>
			  	</View>
			  	<View style={styles.viewJual}>
			  		<TouchableOpacity
			  			style={styles.buttonSell}
			  			onPress={this.onPressAddProduct}
			  		>
			  			<Icon name="cart-plus" size={28} color="red" />
			  			<View style={styles.viewIcon}>
			  			    <Text style={styles.text}>Add Product</Text>
			  				  <Icon name="angle-right" size={30} color="grey" />
			  			</View>
			  		</TouchableOpacity>
			  	</View>
			  	<View style={styles.viewJual}>
			  		<TouchableOpacity
			  			style={styles.buttonSell}
			  			onPress={this.onPressAddProduct}
			  		>
			  			<Icon name="envelope-open" size={25} color="red" />
			  			<View style={styles.viewIcon}>
			  			    <Text style={styles.text}>MyStore</Text>
			  				  <Icon name="angle-right" size={30} color="grey" />
			  			</View>
			  		</TouchableOpacity>
			  	</View>
			  	<View style={styles.viewBantuan}>
						 <TouchableOpacity 
							 style={styles.buttonBantuan}
							 onPress={this.onPressAbout}
							>
			  		   <Icon name="question" size={30} color="red"/>
			  		   <View style={styles.viewIcon}>
			  			    <Text style={styles.textBantuanTentang}>Bantuan</Text>
			  				  <Icon name="angle-right" size={30} color="grey" />
			  			 </View>
			  		 </TouchableOpacity>
			  	</View>
			  	<View style={styles.viewTentang}>
			  			<TouchableOpacity 
							 style={styles.buttonTentang}
							 onPress={this.onPressAbout}
			  			>
			  				<Icon name="exclamation" size={30} color="red"/>
			  				<View style={styles.viewIcon}>
			  			    <Text style={styles.textBantuanTentang}>Tentang</Text>
			  				  <Icon name="angle-right" size={30} color="grey"/>
			  				</View>
			  			</TouchableOpacity>
			  	</View>
			  	<View style={styles.viewForgot}>
			  		<TouchableOpacity
			  			style={styles.buttonForgot}
			  			onPress={this.onPressForgot}
			  		>
			  			<Icon name="lock" size={30} color="red" />
			  			<View style={styles.viewIcon}>
			  				<Text style={styles.text}>Forgot Password</Text>
			  				<Icon name="angle-right" size={30} color="grey"/>
			  			</View>
			  		</TouchableOpacity>
			  	</View>
			  	<View style={styles.viewKeluar}>
			  			<TouchableOpacity style={styles.buttonTentang}>
			  				<Icon name="sign-out" size={25} color="red" />
			  				<View style={styles.viewIcon}>
			  			    <Text style={styles.textOut}>Keluar</Text>
			  				  <Icon name="angle-right" size={30} color="grey" />
			  				</View>
			  			</TouchableOpacity>
			  	</View>
			  </View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#fff',
		paddingTop: 10,
		paddingBottom: 20
	},
	viewProfile: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5
	},
	buttonMyAccount: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10		
	},
	viewOrderan: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5		
	},
	buttonOrderan: {
		flexDirection: 'row',
		paddingLeft: 5,
		paddingRight: 10		
	},
	viewJual: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5		
	},
	buttonSell: {
		flexDirection: 'row',
		paddingLeft: 5,
		paddingRight: 10		
	},
	text: {
		paddingLeft: 15,
	},
	textBantuanTentang: {
		paddingLeft: 18,
	},
	textOut: {
		paddingLeft: 10,
	},
	viewBantuan: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 5,
		paddingBottom: 10,
		paddingLeft: 5		
	},
	buttonBantuan: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10		
	},
	viewTentang: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingLeft: 5,
		paddingTop: 10,
		paddingBottom: 10,	
	},
	viewForgot: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingLeft: 5,
		paddingTop: 10,
		paddingBottom: 10,	
	},
	buttonForgot: {
		flexDirection: 'row',
		paddingLeft: 13,
		paddingRight: 10
	},
	viewKeluar: {
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 2		
	},
	buttonTentang: {
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 10
	},
	viewIcon: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
})

export default ProfileLogged