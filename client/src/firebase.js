import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "ecommerce-b1ad2.firebaseapp.com",
    projectId: "ecommerce-b1ad2",
    storageBucket: "ecommerce-b1ad2.appspot.com",
    messagingSenderId: "816377875665",
    appId: "1:816377875665:web:c7d8938714f64eb18449f0"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth} 
export default db
