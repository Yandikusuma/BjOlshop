import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Stylis, { deviceWidth } from '../style/stylis'
import Icon from 'react-native-vector-icons/Feather'



class TabBarFooter extends Component{
	render(){
		return(
			<View style={styles.container}>
			 <View style={styles.contentIcon}>
			   <TouchableOpacity>
			     <View style={styles.viewIcon}>
			    	 <Icon name="home" size={24} color="#909090" />
			    	 <Text style={styles.textIcon}>Home</Text>
			     </View>
					</TouchableOpacity>
					<TouchableOpacity>
            <View style={styles.viewIcon}>
              <Icon name="shopping-cart" size={24} color="#909090" />
              <Text style={styles.textIcon}>Keranjang</Text>
            </View>
					</TouchableOpacity>
					<TouchableOpacity>
            <View style={styles.viewIcon}>
              <Icon name="user" size={24} color="#909090" />
              <Text style={styles.textIcon}>Akun</Text>
            </View>
					</TouchableOpacity>
			 </View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
	},
	contentIcon:{
		backgroundColor: 'white',
		position: 'absolute',
    bottom: 0,
		height: 50,
		flexDirection: 'row',

	},
	viewIcon: {
    paddingLeft: 10,
    paddingRight: 10,
    width: deviceWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
	},
	textIcon: {
    fontSize: 12,
    paddingTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
})

export default TabBarFooter