import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjkoi72r85GwHez7P-vLr6T3EcXVZOtGk",
    authDomain: "tusbebidasonline.firebaseapp.com",
    projectId: "tusbebidasonline",
    storageBucket: "tusbebidasonline.appspot.com",
    messagingSenderId: "942541020743",
    appId: "1:942541020743:web:df4700435da497471e5b62"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase =()=>app;
  export const getFirestore = ()=>firebase.firestore(app);