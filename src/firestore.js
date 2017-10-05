import firebase from 'firebase';
import firestore from 'firebase/firestore';

// get your config by following instructions here https://firebase.google.com/docs/web/

const config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>"
}

const Firestore = firebase.initializeApp(config).firestore();

const todoCollection = Firestore.collection('todo');

export {Firestore, todoCollection};