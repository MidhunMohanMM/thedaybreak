import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDM_OK4F4ilNhF1h8UxLOw_byw6ILqqrH8",
    authDomain: "udemy-ninja-chat-ae1a6.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-ae1a6.firebaseio.com",
    projectId: "udemy-ninja-chat-ae1a6",
    storageBucket: "udemy-ninja-chat-ae1a6.appspot.com",
    messagingSenderId: "361167125833"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()