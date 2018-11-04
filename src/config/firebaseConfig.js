import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKXuybngN3CSREmtVDEUqNHZaxfLoHyhg",
    authDomain: "projectapp-projectcreator.firebaseapp.com",
    databaseURL: "https://projectapp-projectcreator.firebaseio.com",
    projectId: "projectapp-projectcreator",
    storageBucket: "projectapp-projectcreator.appspot.com",
    messagingSenderId: "566318699324"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;