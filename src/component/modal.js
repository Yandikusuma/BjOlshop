import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, } from 'react-native';
import Modal from 'react-native-modal';


const ModalDetail = ({ onToggle, isVisible, navigator }) => {
	onPressDetail = () => {
		onToggle()
		navigator.push({
			screen: 'DetailScreen',
			title: 'Detail Product'
		});

	}
	onPressTambah = () => {
		Alert.alert(
			"Sukses"
		)
	}
	return(
		    <Modal 
					transparent={true}
					isVisible={isVisible}
					animationOutTiming= {1000}
					onBackdropPress={onToggle}
				>
					<View style={styles.modal}>
						<View style={styles.viewModal}>
							 <View style={styles.imageView}>
							   <Image 
							     style={styles.imageContentModal}
							     source={require('../../image/pakaian-pria.jpg')}
						     />
							 </View>
							 <View>
								 <Text style={styles.text}>Merek: Kemeja</Text>
								 <Text style={styles.text}>Harge: Rp250.000</Text>
								 <Text style={styles.text}>Kualitas: Standard</Text>
								 <Text style={styles.text}>Stock: Terakhir</Text>						 								 						 
							 </View>
							 <View style={styles.modalKeranjang}>
								 <TouchableOpacity
									 style={styles.buttonDetail}
									 onPress={this.onPressTambah}								  
								 >
								   <Text>Tambah Kekeranjang</Text>
								 </TouchableOpacity>
							 </View>
							 <View style={styles.modalDetail}>
								 <TouchableOpacity
									 style={styles.buttonDetail}
									 onPress={this.onPressDetail}
								 >
							     <Text>Lihat Lebih Detail</Text>
						     </TouchableOpacity>
							 </View>
						</View>
					</View>
        </Modal>
	)
} 
const styles = StyleSheet.create({
	imageView: {
		alignItems: 'center',
	},
	imageContent: {
		width: 160,
		height: 170
	},
	modal: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	viewModal: {
		backgroundColor: '#0059b3',
		flexDirection: 'column',
	},
	imageContentModal: {
		width: 280,
		padding: 10,
		height: 280,
	},
	modalKeranjang: {
		alignItems: 'center',
		marginTop: 50
	},
	modalDetail: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20
	},
	buttonDetail: {
		backgroundColor: 'red',
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white'
	}
})


export default ModalDetail
	