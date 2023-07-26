import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBC_YG1xxSOeCZuod5acX8Ni0o950kCd4Y",
    authDomain: "social-media2-a88fe.firebaseapp.com",
    projectId: "social-media2-a88fe",
    storageBucket: "social-media2-a88fe.appspot.com",
    messagingSenderId: "220173697171",
    appId: "1:220173697171:web:1a4d93f350835a62f74d66"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }