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
import AddProduct from '../shop/addProduct';
import Keranjang from '../shop/keranjang';
import Profile from '../profile/profil';
import Login from '../login/login';
import IntroLoggin from '../login/introLoggin';
import MyAccount from '../login/myAccount'
import Register from '../login/register';
import ForgotPassword from '../login/forgotPassword';
import About from '../profile/about';
import Pesan from '../shop/pesan';
import Payment from '../payment/payment';
import ContenDiscountMore from '../../component/contenDiscountMore';
import { Provider } from 'react-redux';
import store from '../../store/index';
import React, { Component } from 'react'


export function registerScreen(){
	
	Navigation.registerComponent('Content', () => Content)
	Navigation.registerComponent('DetailScreen', () => DetailScreen, store, Provider)	
	Navigation.registerComponent('DetailShirtPria', () => DetailShirtPria, store, Provider)
	Navigation.registerComponent('DetailPantsPria', () => DetailPantsPria, store, Provider)	
	Navigation.registerComponent('DetailShirtWanita', () => DetailShirtWanita, store, Provider)
	Navigation.registerComponent('DetailPantsWanita', () => DetailPantsWanita, store, Provider)	
	Navigation.registerComponent('DetailJam', () => DetailJam, store, Provider)
	Navigation.registerComponent('AddProduct', () => AddProduct)	
	Navigation.registerComponent('DetailSepatu', () => DetailSepatu, store, Provider)											
	Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider)
	Navigation.registerComponent('Keranjang', () => Keranjang, store, Provider)
	Navigation.registerComponent('Profile', () => Profile)
	Navigation.registerComponent('MyAccount', () => MyAccount)	
	Navigation.registerComponent('Login', () => Login)
	Navigation.registerComponent('About', () => About)
	Navigation.registerComponent('Pesan', () => Pesan)		
	Navigation.registerComponent('IntroLoggin', () => IntroLoggin)	
	Navigation.registerComponent('Register', () => Register)
	Navigation.registerComponent('ForgotPassword', () => ForgotPassword)
	Navigation.registerComponent('Payment', () => Payment)
	Navigation.registerComponent('ContenDiscountMore', () => ContenDiscountMore)			
	
	
	
}