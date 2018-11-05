import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';


import Content from '../../component/content';
import DetailScreen from '../detailScreen/detailScreen'
import DetailShirtPria from '../detailScreen/pria/detailShirtPria';
import DetailShirtWanita from '../detailScreen/wanita/detailShirtWanita';
import DetailJam from '../detailScreen/accecories/jam/detailJam'
import DetailSepatu from '../detailScreen/accecories/sepatu/detailSepatu'
import DetailPantsPria from '../detailScreen/pria/detailPantsPria';
import DetailPantsWanita from '../detailScreen/wanita/detailPantsWanita';
import HomeScreen from '../home/homeScreen';
import Keranjang from '../shop/keranjang';
import Profile from '../profile/profil';
import Login from '../login/login';
import Register from '../login/register';
import ForgotPassword from '../login/forgotPassword';

export function registerScreen(){
	
	Navigation.registerComponent('Content', () => Content)
	Navigation.registerComponent('DetailScreen', () => DetailScreen)	
	Navigation.registerComponent('DetailShirtPria', () => DetailShirtPria)
	Navigation.registerComponent('DetailPantsPria', () => DetailPantsPria)	
	Navigation.registerComponent('DetailShirtWanita', () => DetailShirtWanita)
	Navigation.registerComponent('DetailPantsWanita', () => DetailPantsWanita)	
	Navigation.registerComponent('DetailJam', () => DetailJam)
	Navigation.registerComponent('DetailSepatu', () => DetailSepatu)											
	Navigation.registerComponent('HomeScreen', () => HomeScreen)
	Navigation.registerComponent('Keranjang', () => Keranjang)
	Navigation.registerComponent('Profile', () => Profile)
	Navigation.registerComponent('Login', () => Login)
	Navigation.registerComponent('Register', () => Register)
	Navigation.registerComponent('ForgotPassword', () => ForgotPassword)
	
	
	
}