import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// get your config by following instructions here https://firebase.google.com/docs/web/

const config = {
	apiKey: 'AIzaSyAPRc8yYpsq7TSuzh5zUO3-q7FPoCJjNzo',
	authDomain: 'preact-firestore.firebaseapp.com',
	databaseURL: 'https://preact-firestore.firebaseio.com',
	projectId: 'preact-firestore',
	storageBucket: 'preact-firestore.appspot.com',
	messagingSenderId: '8281769863'
};

const Firestore = firebase.initializeApp(config).firestore();

const todoCollection = Firestore.collection('todo');

export { Firestore, todoCollection };