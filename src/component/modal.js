import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native';
import Modal from 'react-native-modal';


const ModalDetail = ({ onToggle, isVisible, navigator }) => {
	onPressDetail = () => {
		onToggle()
		navigator.push({
			screen: 'BajuDetailWanita',
		});

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
								 <Text>Merek: Kemeja</Text>
								 <Text>Harge: Rp250.000</Text>
								 <Text>Kualitas: Standard</Text>
								 <Text>Stock: Terakhir</Text>						 								 						 
							 </View>
							 <View style={styles.modalKeranjang}>
								 <TouchableOpacity
									 style={styles.buttonDetail}								  
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
		backgroundColor: 'blue',
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
	}
})


export default ModalDetail
	