// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPt7jsKbF8oCZomeRQoCE4ohE6gxliUC4",
  authDomain: "movie-watchlist-573b6.firebaseapp.com",
  projectId: "movie-watchlist-573b6",
  storageBucket: "movie-watchlist-573b6.appspot.com",
  messagingSenderId: "633279225651",
  appId: "1:633279225651:web:fd163921ec2ed03aaae846",
  measurementId: "G-TZ178S832X"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export const imgdb =getStorage(app)

export const db = getFirestore(app);

export {auth , provider};
