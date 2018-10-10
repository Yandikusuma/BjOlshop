import Icon from 'react-native-vector-icons/Feather'
import {Navigation} from 'react-native-navigation'

const TabBarFooter = () => {

Navigation.startTabBasedApp({
	tabs:[
		{
		label: 'Home',
		screen: 'HomeScreen',
		icon: require('../../image/icon_baju.png')
	},
	{
		label: 'Keranjang',
		screen: 'Keranjang',
		icon: require('../../image/icon_baju.png')
	},
	{
		label: 'Profile',
		screen: 'Profile',
		icon: require('../../image/icon_baju.png')
	}
],
	tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
		tabBarButtonColor: '#e4ff64', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
		tabBarSelectedButtonColor: '#222222', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
		tabBarBackgroundColor: '#777777', // optional, change the background color of the tab bar
		initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
	},
	appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarHideShadow: false,
    tabBarSelectedButtonColor: '#63d7cc',
    tabBarTranslucent: false,
    tabFontSize: 10,
		selectedTabFontSize: 12,
		hideBackButtonTitle: false,// Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
    forceTitlesDisplay: true,
	},
	animationType: 'none'
})
}

export default TabBarFooter