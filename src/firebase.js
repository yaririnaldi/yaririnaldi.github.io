import firebase from 'firebase/app'
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDbT5doPwyZP54hckrKyWifE4i9lVKsV8g",
  authDomain: "wedinv-4e21d.firebaseapp.com",
  databaseURL: "https://wedinv-4e21d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedinv-4e21d",
  storageBucket: "wedinv-4e21d.appspot.com",
  messagingSenderId: "1083674240972",
  appId: "1:1083674240972:web:c452ce8742ca42d8e71f69"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();