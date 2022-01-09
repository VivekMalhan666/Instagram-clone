import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCmO9R3p3pyDLBgMg7nTZx___EK8XQL2tY',
  authDomain: 'instagram-79bc5.firebaseapp.com',
  projectId: 'instagram-79bc5',
  storageBucket: 'instagram-79bc5.appspot.com',
  messagingSenderId: '65654924362',
  appId: '1:65654924362:web:9778aaa8697da00e8af2b3',
  measurementId: 'G-5DWYWW06N5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
