import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';


import Content from '../../component/content'
import DetailShirt from '../../screen/detailScreen/detailShirt'
import HomeScreen from '../../screen/home/homeScreen'



export function registerScreen(){
	
	Navigation.registerComponent('Content', () => Content)
	Navigation.registerComponent('DetailShirt', () => DetailShirt)
	Navigation.registerComponent('HomeScreen', () => HomeScreen)
	
	
}