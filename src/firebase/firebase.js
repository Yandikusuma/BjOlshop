import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyC8IfpKtLu-6ogGdarx7jVyK8Nv-58Nkpo",
  authDomain: "bjolshop-f85b4.firebaseapp.com",
  databaseURL: "https://bjolshop-f85b4.firebaseio.com",
  projectId: "bjolshop-f85b4",
  storageBucket: "bjolshop-f85b4.appspot.com",
}

firebase.initializeApp(firebaseConfig);

export default firebase