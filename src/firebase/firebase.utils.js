import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDq8I00xpXIpb6XdAK7w8EMhrCNnVKFqto",
  authDomain: "crwn-db-7bd93.firebaseapp.com",
  databaseURL: "https://crwn-db-7bd93.firebaseio.com",
  projectId: "crwn-db-7bd93",
  storageBucket: "",
  messagingSenderId: "447177186607",
  appId: "1:447177186607:web:5a0e0bce774714b46cd5da"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;