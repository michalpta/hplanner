import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  projectId: '',
  databaseURL: ''
});

const db = firebase.firestore();

function getRequestsCollection() {
  return db.collection('requests');
}

function getRequestById(referenceId) {
  return getRequestsCollection().doc(referenceId);
}

function getRequestsForCity(city) {
  return getRequestsCollection().where('city', '==', city);
}

function getToken() {
  return db.collection('orchToken').doc('1');
}

export {
  getRequestById,
  getRequestsCollection,
  getRequestsForCity,
  getToken
};
