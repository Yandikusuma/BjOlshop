import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';


import Content from '../../component/content';
import DetailShirt from '../detailScreen/detailShirt';
import HomeScreen from '../home/homeScreen';
import Keranjang from '../shop/keranjang';
import Profile from '../profile/profil'
import Login from '../login/login'

export function registerScreen(){
	
	Navigation.registerComponent('Content', () => Content)
	Navigation.registerComponent('DetailShirt', () => DetailShirt)
	Navigation.registerComponent('HomeScreen', () => HomeScreen)
	Navigation.registerComponent('Keranjang', () => Keranjang)
	Navigation.registerComponent('Profile', () => Profile)
	Navigation.registerComponent('Login', () => Login)
	
}