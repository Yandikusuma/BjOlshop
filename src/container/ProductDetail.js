import React, { Component, version } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TabBarDetail from '../component/tabBarDetail';
import {connect} from 'react-redux';



class ProductDetail extends Component{
	static navigatorStyle = { 
		tabBarHidden: true,
		navBarHidden: true
	}

	renderProducts = (products) => {
		return products.map((item, index) =>{
			return(
				<View key={index}>
				  <TabBarDetail navigator={this.props.navigator}/>
			    <ScrollView>
			      <View>
			      	<View style={styles.viewImage}>
			      		<Image 
			      			style={styles.image}
			      			source={item.image}
			      		/>
			    		</View>
			    		<ScrollView>
			    		  <View style={styles.textDescription}>
			    		     <View style={styles.viewText}>
			    		       <Text style={styles.text}>Nama Toko: {item.name}</Text>
			    		  	 </View>
			    		     <View style={styles.viewText}>
			    		       <Text>Merek: {item.merek}</Text>
			    		  	 </View>
			    		  	 <View style={styles.viewText}>
			    		  	   <Text>Stock: {item.stock}</Text>
									 </View>
									 {item.discount === null ?
										<View style={styles.viewText}>
			    		  	   <Text>Discount: 0%</Text>
			    		  	  </View>
			    				 :<View style={styles.viewText}>
			    		  	   <Text>Discount: {item.discount}</Text>
			    		  	  </View>}
			    		  	 <View style={styles.viewText}>
			    		  	   <Text>Alamat: {item.alamat}</Text>
			    		  	 </View>
			    		  	 <View style={styles.viewText}>
			    		  	   <Text>Quality: {item.quality}</Text>
			    				 </View>
			    				 <View style={styles.viewText}>
			    		  	   <Text>Description: {item.description}</Text>
			    		  	 </View>
			    		  </View>
			    		</ScrollView>
			    		<View style={styles.viewButton}>
			    		  <View style={styles.boxButton}>
			    		  	  <Text style={styles.textHarga}>IDR{item.harga}</Text>
			    		  </View>
			    		  <View>
									<TouchableOpacity 
									  onPress={this.props.addItemToCart}
			    					style={styles.boxButtonPesan}
			    				>
			    		  	  <Text style={styles.textPesan}>Add to Cart</Text>
			    		  	</TouchableOpacity>
			    		  </View>
			    	  </View>
			    	</View>
			    </ScrollView>
		  	</View>
			)
		})
	}

	render(){
		return(
				<View style={styles.container} >
				  {this.renderProducts(this.props.products)}
				</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addItemToCart:(products) => dispatch({type: 'ADD_TO_CART', payload: products})
	}
}

export default connect(null, mapDispatchToProps)(ProductDetail);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cccccc'
	},
	viewImage: {
		alignItems: 'center',
		backgroundColor: 'white',
		marginHorizontal: 10,		
		marginVertical: 20
	},
	image: {
		height: 300,
		width: 250
	},
	textDescription: {
		backgroundColor: 'white',
		marginVertical: 10,
		paddingBottom: 20
	},
	viewText: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: '#cccccc',
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 18,
	},
	viewButton: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 20,
		marginBottom: 60
	},
	boxButton: {
		backgroundColor: '#b3b3b3'
	},
	textHarga: {
		paddingHorizontal: 35,
		paddingVertical: 20,
		color: 'red'
	},
	boxButtonPesan: {
		backgroundColor: 'red'
	},
	textPesan: {
		paddingHorizontal: 40,
		paddingVertical: 20,
		color: '#fff'
	}

})