import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';



class Pesan extends Component{
	static navigatorStyle={
		tabBarHidden: true
	}
	state = { 
			text: 0

		}

	increaseCounter = () => {
		this.setState({
			text: this.state.text+1
		})
	}
	decreaseCounter = () => {
		this.setState({
			text: this.state.text-1
		})
	}

	onPressPayment = () => {
		this.props.navigator.push({
			screen: 'Payment',
			title: 'CheckOut'
		})
	}
	onPressAdd = () => {
		this.props.navigator.push({
			screen: 'HomeScreen'
		})
	}

	render(){
		return(
			<View style={styles.container}>
				<View>
				  <View style={styles.viewOrder}>
				    <Text style={styles.textWhite}>You Order</Text>
			    </View>
				</View>
				<ScrollView>
				  <View style={styles.viewList}>
				  	<View style={styles.viewGambar}>
				  		<Image 
				  		  style={styles.imageContent}
				  		  source={require('../../../image/sepatu.jpeg')}
				  		/>
				  	</View>
				  	<View style={styles.textIcon}>
				  		<View style={styles.text}>
				  			<Text>Lorem Ipsum</Text>
				  			<View style={styles.viewBox}>
				  				<View style={styles.boxNama}>
				  				  <Text>Nama Toko</Text>
				  				</View>
				  				<View style={styles.textButton}>
				  					<TouchableOpacity
				  					  onPress={this.decreaseCounter}
				  					>
				  					  <Text style={styles.textB}>-</Text>
				  					</TouchableOpacity>
				  					<Text style={styles.textB}>{this.state.text}</Text>
				  					<TouchableOpacity
				  					  onPress={this.increaseCounter}
				  					>
				  					  <Text style={styles.textB}>+</Text>
				  					</TouchableOpacity>
				  				</View>
				  			</View>
				  		</View>
				  	</View>
				  	<View>
				  		<View style={{ alignItems: 'flex-end'}}>
				  			<TouchableOpacity>
				  		    <Text>X</Text>
				  			</TouchableOpacity>
				  		</View>
				  		<View style={{marginTop: 10}}>
				  	    <Text>Harga</Text>
				  		</View>
				  	</View>
					</View>
					<View style={styles.boxOrder}>
						<View style={styles.viewBoxOrder}>
							<View>
							  <Text style={styles.textService}>Shipping and Handling</Text>
							</View>
							<View style={styles.viewService}>
							  <Text style={styles.textWhite}>Free Service</Text>
							</View>
						</View>
						<View style={styles.viewTotalOrder}>
							<View>
							  <Text style={styles.textService}>Order Total</Text>
							</View>
							<View>
							  <Text style={{color: 'red'}}>Total Harga</Text>
							</View>
						</View>
					</View>
					<View style={styles.buttonConfirm}>
					 <TouchableOpacity 
						 style={styles.button}
						 onPress={this.onPressPayment}
					 >
					  <Text style={styles.textWhite}>Confirm Order</Text>
					 </TouchableOpacity>
					</View>
				</ScrollView>
				<View style={styles.imagePlus}>
					<TouchableOpacity 
					  onPress={this.onPressAdd}
					>
					  <Image 
					  	source={require('../../../image/index.jpeg')}
					  	style={{height: 50, width: 50}}
					  />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cccccc'
	},
	viewList: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		marginVertical: 20,
		marginHorizontal: 20,
		borderRadius: 5,
	},
	textWhite: {
		color: '#fff'
	},
	viewOrder: {
		backgroundColor: '#0059b3',
		alignItems: 'center',
		paddingVertical: 20
	},
	viewGambar: {
		backgroundColor: 'red',
		width: 101,
		borderRightWidth: 1,
		borderColor: 'grey'
		
	},
	imageContent: {
		width: 100,
		height: 100,
	},
	textIcon: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	text: {
		flexDirection: 'column',
		justifyContent: 'space-between',		
		margin: 10,
		width: 150
	},
	viewBox: {
		flexDirection: 'row'
	},
	boxNama: {
		backgroundColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 5,	
		borderRadius: 5	
	},
	textButton: {
		flexDirection: 'row',
		marginHorizontal: 20,
		backgroundColor: 'grey',
		borderRadius: 5	
		
	},
	textB: {
		paddingHorizontal: 5,
		fontSize: 16
	},
	boxOrder: {
		flex: 1,
		backgroundColor: '#fff',
		marginHorizontal: 20
	},
	viewBoxOrder: {
		paddingVertical: 20,
		marginHorizontal: 10,
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	viewService: {
		backgroundColor: 'green',
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderRadius: 5
	},
	textService: {
		color: '#000',
		fontWeight: 'bold'
	},
	viewTotalOrder: {
		paddingVertical: 20,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	buttonConfirm: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 30
	},
	button: {
		backgroundColor: 'green',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5
	},
	imagePlus: {
		alignItems: 'flex-end',
		margin: 10
	}
})



export default Pesan