import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';


import Content from '../../component/content';
import DetailShirtPria from '../detailScreen/pria/detailShirtPria';
import DetailShirtWanita from '../detailScreen/wanita/detailShirtWanita';
import BajuDetailWanita from '../detailScreen/wanita/detailBaju/bajuDetailWanita';
import HomeScreen from '../home/homeScreen';
import Keranjang from '../shop/keranjang';
import Profile from '../profile/profil';
import Login from '../login/login';
import Register from '../login/register';
import ForgotPassword from '../login/forgotPassword';

export function registerScreen(){
	
	Navigation.registerComponent('Content', () => Content)
	Navigation.registerComponent('DetailShirtPria', () => DetailShirtPria)
	Navigation.registerComponent('DetailShirtWanita', () => DetailShirtWanita)
	Navigation.registerComponent('BajuDetailWanita', () => BajuDetailWanita)			
	Navigation.registerComponent('HomeScreen', () => HomeScreen)
	Navigation.registerComponent('Keranjang', () => Keranjang)
	Navigation.registerComponent('Profile', () => Profile)
	Navigation.registerComponent('Login', () => Login)
	Navigation.registerComponent('Register', () => Register)
	Navigation.registerComponent('ForgotPassword', () => ForgotPassword)
	
	
	
}