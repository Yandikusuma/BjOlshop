import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


class Content extends Component{
	render(){
		return(
			<View style={styles.contentView}>
			 <Text>Pakaian Pria</Text>
			 <View>
				<View style={styles.imageShirt}>
				  <TouchableOpacity>
					  <Image
					    style={{width: 120, height:120}}
					    source={require('../../image/pakaian-pria.jpg')}
					  />
					  <View style={styles.textShirt}>
					    <Text>Baju</Text>
					  </View>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity>
					 <Image 
					   style={{width: 120, height:120}}
					   source={require('../../image/pakaian-pria.jpg')}/>
					</TouchableOpacity>
				</View>
			 </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	contentView:{
		backgroundColor: 'white',
		padding: 10
	},
	imageShirt:{
		padding: 20,
	},
	textShirt:{
		paddingLeft: 25,
		paddingTop: 10
	}
})

export default Content