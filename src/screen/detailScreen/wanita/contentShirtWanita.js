import React, { Component } from 'react'
import { 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	Image, 
	Alert, 
	TouchableHighlight, 
	Vibration} from 'react-native';
import Modal from 'react-native-modal';
import ModalDetail from '../../../component/modal'

class ContentShirtWanita extends Component {
	state = {
		isVisible : false
	}

	onPressModal = () => {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}


	render () {
		return (
			<View>
			  <View style={styles.container}>
			  	<View style={styles.containerContent}>
						<TouchableOpacity
						  onPress={this.onPressModal}
						>
			  			 <View style={styles.imageView}>
			  				<Image 
			  					style={styles.imageContent}
			  					source={require('../../../../image/pakaian-pria.jpg')}
			  				/>
			  			 </View>
			  			 <View>
			  				<Text>merek: Kemeja</Text>
			  				<Text>harga: Rp250.000</Text>
			  			 </View>
			  		</TouchableOpacity>
			  	</View>
			  	<View style={styles.containerContent}>
						<TouchableOpacity
						  onPress={this.onPressModal}
						>
			  			 <View style={styles.imageView}>
			  				<Image 
			  					style={styles.imageContent}
			  					source={require('../../../../image/pakaian-pria.jpg')}
			  				/>
			  			 </View>
			  			 <View>
			  				<Text>merk :</Text>
			  				<Text>harga</Text>
			  			 </View>
			  		</TouchableOpacity>
			  	</View>
				</View>
				<ModalDetail 
					transparent={true}
					navigator={this.props.navigator}
				  isVisible={this.state.isVisible}
				  onToggle={this.onPressModal}
				/>
		  </View>
	)
}
}


const styles = StyleSheet.create({
container: {
	flexDirection: 'row'
},
containerContent: {
	flex: 1,
	margin: 10,
	backgroundColor: 'aqua',
	padding: 10,
	flexDirection: 'column'
},
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

export default ContentShirtWanita