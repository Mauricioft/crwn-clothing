import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCk2tXlzDFMhpfJ-joCbI2vJD7kQDYJl74",
  authDomain: "crwn-db-630df.firebaseapp.com",
  databaseURL: "https://crwn-db-630df.firebaseio.com",
  projectId: "crwn-db-630df",
  storageBucket: "crwn-db-630df.appspot.com",
  messagingSenderId: "194781243061",
  appId: "1:194781243061:web:fddde917ae50fed216c0fc",
  measurementId: "G-GP4S9QBDQ5"
}

// Initialize Firebase
firebase.initializeApp(config)
// firebase.analytics()

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage()
const provider = new firebase.auth.GoogleAuthProvider()

// select_account
// El servidor de autorización solicita al usuario que seleccione una cuenta de usuario. 
// Esto permite a un usuario que tiene varias cuentas en el servidor de autorización seleccionar 
// entre las múltiples cuentas para las que puede tener sesiones actuales.
provider.setCustomParameters({ 'prompt': 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase