import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  projectId: '',
  databaseURL: ''
});

const db = firebase.firestore();

export default db;
