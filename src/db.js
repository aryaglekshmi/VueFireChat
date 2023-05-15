import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyBWcqmDzZaQAwGPwunqK5oVdAA7jEPN1Ng",
  authDomain: "vuefirechat-d7410.firebaseapp.com",
  projectId: "vuefirechat-d7410",
  storageBucket: "vuefirechat-d7410.appspot.com",
  messagingSenderId: "200481190360",
  appId: "1:200481190360:web:f4ed858c7beb4592c082ad",
};
const app = firebase.initializeApp(config);
const db = app.database();
export default db;
