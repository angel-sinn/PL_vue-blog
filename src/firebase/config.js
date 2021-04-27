import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJ734HzErFYUX1eBMYDgxwOftsr09jG2M",
  authDomain: "lhl-blog.firebaseapp.com",
  projectId: "lhl-blog",
  storageBucket: "lhl-blog.appspot.com",
  messagingSenderId: "253358048986",
  appId: "1:253358048986:web:da4ee871c4821d8fff47e3"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }