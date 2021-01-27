/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Need to seed the database
// import { seedDatabase } from '../seed';

// we need a config here
const config = {
  apiKey: 'AIzaSyD4q8gvt9HvfgFzxAJXyM-4PtcSH4ztXpo',
  authDomain: 'netflix-95400.firebaseapp.com',
  projectId: 'netflix-95400',
  storageBucket: 'netflix-95400.appspot.com',
  messagingSenderId: '999280776990',
  appId: '1:999280776990:web:dacb39ec4bdea03d71db0f',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
