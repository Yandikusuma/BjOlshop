import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	TextInput, 
	ScrollView, } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



class Payment extends Component{
	static navigatorStyle={
		tabBarHidden: true
	}

	onPressPesan = () => {
		this.props.navigator.push({
			screen: 'Pesan',
			title: 'Confirm Order'
		})
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.paymentMethod}>
				  <Text style={styles.textInvoice}>Pay Invoice</Text>
				</View>
				<ScrollView>
				  <View style={styles.viewAmount}>
				  	<View>
				  	  <Text style={styles.textAmount}>Payment amount</Text>
				  	</View>
				  	<View style={styles.viewUang}>
				  		<View>
				  		  <Text style={styles.textUang}>IDR50.000</Text>
				  		</View>
				  		<View>
								<TouchableOpacity 
									style={styles.buttonEdit}
									onPress={this.onPressPesan}
								>
				  			  <Text>Edit</Text>
				  			</TouchableOpacity>
				  		</View>
				  	</View>
				  	<View style={styles.viewInput}>
				  		 <Text style={styles.textName}>Name on card</Text>
				  		 <TextInput
			      	  placeholder="Name"
			      	  placeholderTextColor="#bfbfbf"
			      	  onChangeText={(text) => this.setState({text})}
			      	  style={styles.textInput}
			      	  underlineColorAndroid="transparent"
			        />
				  	</View>
				  	<View style={styles.viewInput1}>
				  		 <Text style={styles.textName}>Card number</Text>
				  		 <TextInput
			      	  placeholder="Card number"
			      	  placeholderTextColor="#bfbfbf"
			      	  onChangeText={(text) => this.setState({text})}
			      	  style={styles.textInput}
								underlineColorAndroid="transparent"
								keyboardType="numeric"
			        />
				  	</View>
				  	<View style={styles.viewInput1}>
						  <View style={styles.input2}>
						    <View>
						      <Text style={styles.textName}>Expiry date</Text>
				  		    <TextInput
			      	      placeholder="MM/YY"
			      	      placeholderTextColor="#bfbfbf"
			      	      onChangeText={(text) => this.setState({text})}
			      	      style={styles.textInput2}
										underlineColorAndroid="transparent"
								    keyboardType="numeric"										
				  			  />
				  			</View>
								<View>
								  <Text style={styles.textName}>Security code</Text>								
				  			  <TextInput
				  			    placeholderTextColor="#bfbfbf"
				  			    onChangeText={(text) => this.setState({text})}
				  			    style={styles.textInput2}
										underlineColorAndroid="transparent"
								    keyboardType="numeric"										
				  		    />
				  			</View>
				  		 </View>
						</View>
						<View style={styles.viewInput1}>
				  		 <Text style={styles.textName}>Zip/Postal Code</Text>
				  		 <TextInput
			      	  placeholderTextColor="#bfbfbf"
			      	  onChangeText={(text) => this.setState({text})}
			      	  style={styles.textInput}
								underlineColorAndroid="transparent"
								keyboardType="numeric"								
			        />
				  	</View>
					</View>
					<View>
						<TouchableOpacity style={styles.buttonPay}>
							<Icon name="lock" size={25} style={{color:'#a6a6a6', paddingRight: 10}}/>
							<Text style={{color: '#fff', paddingRight: 5}}>Pay</Text>
						  <Text style={{color: '#fff'}}>IDR50</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	paymentMethod: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0059b3',
		paddingVertical: 20
	},
	textInvoice: {
		color: '#fff',
		fontSize: 20
	},
	viewAmount: {
		marginHorizontal: 30,
		marginVertical: 20
	},
	textAmount: {
		fontSize: 19,
		fontWeight: 'bold'
	},
	textUang: {
		fontSize: 20
	},
	viewUang: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	buttonEdit: {
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		borderColor: '#cccccc'
	},
	viewInput: {
		marginTop: 40
	},
	viewInput1: {
		marginTop: 20
	},
	textName: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		paddingLeft: 10,
		borderRadius: 5
	},
	input2: {
		flexDirection: 'row'
	},
	textInput2: {
		borderWidth: 1,
		borderColor: '#cccccc',
		paddingLeft: 10,
		borderRadius: 5,
		paddingHorizontal: 50
	},
	buttonPay: {
		backgroundColor: 'green',
		flexDirection: 'row',
		marginHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 5
	}
})

export default Payment